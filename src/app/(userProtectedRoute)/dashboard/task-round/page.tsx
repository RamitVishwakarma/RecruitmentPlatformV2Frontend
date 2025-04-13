'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { putApi } from '@/api/api';
import { apiEndPoints } from '@/api/apiEndpoints';
import { Spinner } from '@/components/common/spinner';
import { Button } from '@/components/ui/button';
import { statusCode } from '@/constants/apiStatus';
import { steps } from '@/constants/dashboard';
import { handleToastApiResponse } from '@/lib/helpers';
import useUserStore from '@/stores/userStore';
import { AndroidTask } from './android-task';
import { DesignTask } from './design-task';
import { MachineLearningTask } from './ml-task';
import { ProgrammingTask } from './programming-task';
import { WebDevelopmentTask } from './web-dev-task';

const taskSchema = z.object({
  link: z.string().url('Invalid URL format'),
});

export default function Task() {
  const router = useRouter();
  const { user } = useUserStore();
  const deadline = steps[1].eventEndDate!;

  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: { link: '' },
  });

  const domain = user?.domain?.toLowerCase();
  const yearString = user?.year || '';
  const year = parseInt(yearString, 10);

  const onSubmit = async (data: { link: string }) => {
    const userId = user?.id || '';
    console.log(data.link);

    const { status, data: responseData } = await putApi(
      apiEndPoints.upload.submitTaskLink(userId),
      { taskLink: data.link },
    );

    if (status === statusCode.Ok200) {
      form.reset();
    }

    handleToastApiResponse(status, responseData);
  };

  const renderTaskContent = () => {
    switch (domain) {
      case 'web developer':
        return (
          <WebDevelopmentTask onSubmit={onSubmit} form={form} year={year} deadline={deadline} />
        );
      case 'designer':
        return <DesignTask onSubmit={onSubmit} form={form} year={year} deadline={deadline} />;
      case 'ml engineer':
        return (
          <MachineLearningTask onSubmit={onSubmit} form={form} year={year} deadline={deadline} />
        );
      case 'app developer':
        return <AndroidTask onSubmit={onSubmit} form={form} year={year} deadline={deadline} />;
      case 'programmer':
        return <ProgrammingTask />;
      default:
        return <UnsupportedDomain />;
    }
  };

  return (
    <div className="my-20 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            className="text[#2F3B00] rounded-3xl border px-4 py-2 text-[16px] font-normal leading-5"
            onClick={() => router.back()}
          >
            <ArrowLeft /> Back
          </Button>
          <h1 className="text-xl font-medium">Tasks</h1>
        </div>
        {renderTaskContent()}
      </div>
    </div>
  );
}

const UnsupportedDomain = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner className="text-neutral-400" />
    </div>
  );
};
