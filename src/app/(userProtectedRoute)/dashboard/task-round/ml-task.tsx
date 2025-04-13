import { ArrowRightCircle, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import FormInput from '@/components/common/form-input';
import { Spinner } from '@/components/common/spinner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { mlTasks } from '@/constants/task-round';

interface MLTaskProps {
  year: number;
  onSubmit: (data: { link: string }) => void;
  form: UseFormReturn<{ link: string }>;
  deadline: Date;
}

export const MachineLearningTask = ({ year, onSubmit, form, deadline }: MLTaskProps) => {
  const router = useRouter();
  const isDeadlinePassed = new Date() > deadline;
  const yearTasks = mlTasks.find((task) => task.year === year)?.tasks;

  if (!yearTasks)
    return (
      <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
        <div className="animate-fade-in-up">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Tasks Unavailable</h2>
          <p className="mx-auto max-w-xl text-lg text-gray-600 md:text-xl">
            We're unable to load your tasks at the moment. This could be due to:
          </p>
        </div>

        <div className="animate-fade-in-up w-full max-w-md space-y-4 delay-100">
          <ul className="list-inside list-disc space-y-2 text-left text-gray-700">
            <li>Session expiration</li>
            <li>Domain assignment pending</li>
            <li>Technical difficulties</li>
          </ul>
        </div>

        <div className="animate-fade-in-up space-y-6 delay-200">
          <div className="rounded-lg bg-blue-50/80 p-6 text-center shadow-sm transition-all hover:bg-blue-50">
            <h3 className="mb-3 text-xl font-semibold text-blue-800">Immediate Solutions</h3>
            <div className="space-y-2">
              <Button
                variant="link"
                className="text-blue-600 hover:text-blue-700"
                onClick={() => router.push('/logout')}
              >
                <ArrowRightCircle className="mr-2 h-5 w-5" />
                Re-authenticate Your Session
              </Button>
              <p className="text-sm text-blue-600">or</p>
              <Link
                href="https://chat.whatsapp.com/KIzWKEujQqbHgOWKAtYhWj"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact team for assistance
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="mt-10 space-y-14">
      <h2 className="pb-2 text-[28px] font-bold text-theme">
        Machine Learning Tasks - Year {year}
      </h2>

      {yearTasks.map((task, index) => (
        <React.Fragment key={task.type}>
          <div className="">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-nowrap text-[28px] font-medium">{task.title}</h3>
              <div className="h-[1px] bg-gradient-line sm:w-[981px]"></div>
            </div>

            <div className="space-y-4">
              <div className="gap-4 md:gap-0">
                <div className="space-y-3 text-[16px] font-normal leading-[25.6px] text-[#353535]">
                  {task.description?.map((paragraph: string, index: number) => {
                    const isHeading = !paragraph.includes('.') && paragraph.length < 50;

                    return isHeading ? (
                      <div key={index} className="font-semibold text-[#100C2C]">
                        {paragraph}
                      </div>
                    ) : (
                      <div key={index} className="ml-4">
                        • {paragraph}
                      </div>
                    );
                  })}
                </div>

                {task.link && (
                  <div className="my-4 flex items-center gap-2">
                    <p className="font-medium">Resource: </p>
                    <Link
                      href={task.link}
                      className="break-words text-[#6B83FF] underline underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {new URL(task.link).href}
                    </Link>
                  </div>
                )}

                {task.imageUrl && (
                  <Image
                    src={task.imageUrl}
                    alt={task.title}
                    width={550}
                    height={351}
                    className="mt-4 w-full rounded-lg shadow-md"
                  />
                )}
              </div>
            </div>

            <div className="my-10 flex flex-col gap-4 md:flex-row">
              <Card className="w-full border-main">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[20px] font-medium text-[#6B83FF]">
                    Judgement Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-4 text-sm text-[#353535]">
                    {task.criteria.map((criterion, cIndex) => (
                      <li key={cIndex}>{criterion}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="w-full border-main">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[20px] font-medium text-[#6B83FF]">
                    Brownie Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-4 text-sm text-[#353535]">
                    {task.browniePoints.map((point, bpIndex) => (
                      <li key={bpIndex}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {index < yearTasks.length - 1 && (
            <div className="flex items-center justify-center xl:py-5">
              <div className="h-[1px] w-full rotate-180 bg-gradient-line"></div>
              <div className="px-8 text-[28px] font-medium text-[#100C2C] xl:h-9">OR</div>
              <div className="h-[1px] w-full bg-gradient-line"></div>
            </div>
          )}
        </React.Fragment>
      ))}

      <div className="flex flex-col items-center justify-center py-6 sm:flex-row xl:pt-10">
        <div className="h-[1px] rotate-180 bg-gradient-line sm:w-[447px]"></div>
        <div className="text-center text-lg font-medium tracking-[0.56px] text-[#100C2C] sm:text-2xl xl:h-[34px] xl:w-[328px]">
          Ready to Submit?
        </div>
        <div className="h-[1px] bg-gradient-line sm:w-[447px]"></div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto flex w-full max-w-md flex-col items-center space-y-10 px-4 sm:px-0"
        >
          <div className="w-full px-0 xl:w-[550px]">
            <div className="w-full px-0 xl:w-[550px]">
              <div className="space-y-2 text-center">
                <h2 className="text-xl font-semibold">Submission Instructions</h2>
                <p className="text-gray-700">
                  Please upload your task details in a single document (if required). Make sure to
                  include:
                </p>
                <ul className="list-inside list-disc text-left text-sm text-gray-600">
                  <li>GitHub repo</li>
                  <li>Jupyter Notebook (.ipynb) or Python script (.py)</li>
                  <li>Include a README explaining your architecture and approach</li>
                  <li>Any necessary explanations or justifications</li>
                </ul>
              </div>
            </div>
          </div>

          <FormInput
            {...form.register('link')}
            name="link"
            type="url"
            placeholder="Add Colab notebook link..."
            className="w-full shadow-md"
          />
          <Button
            type="submit"
            className="w-28 rounded-md bg-[#635BFF] px-10 py-5 text-base font-medium hover:bg-theme-interactive"
            disabled={form.formState.isSubmitting || isDeadlinePassed}
          >
            {form.formState.isSubmitting ? <Spinner className="text-white" /> : 'Submit'}
          </Button>
        </form>
      </Form>
    </div>
  );
};
