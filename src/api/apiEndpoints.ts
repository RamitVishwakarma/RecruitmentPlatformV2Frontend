export const apiEndPoints = {
  users: {
    registerEmail: '/users/send-otp-email', //used
    verifyEmail: '/users/verify-otp-email', //used
    register: '/users/register', //used
    login: '/users/login', //used
    requestPasswordReset: '/users/request-password-reset', //used
    verifyToken: (token: string) => `/users/verify/${token}`, //used
    resetPassword: '/users/reset-password', //used
    logout: '/users/logout', // used
    resetPasswordWithOldPassword: '/users/reset-password-with-old-password', //used
    updateUserProfile: '/users/update-profile', //used
    updateSocialLinks: '/social/', //used
    // refreshToken: '/users/refresh-token',
    // getAll: '/users',
    // shortlist: '/users/shortlist',
    // domain: '/users/domain',
    // getById: (id: string) => `/users/${id}`,
    // update: (id: string) => `/users/${id}`,
    // delete: (id: string) => `/users/${id}`,
  },

  admin: {
    login: '/admin/auth/login',
    createAptitude: '/admin/aptitude/create-aptitude',
  },

  upload: {
    uploadPhoto: '/upload/photo',
    uploadResume: '/upload/resume',
    submitTaskLink: (id: string) => `/upload/${id}/task-link`, //used
  },

  oauth: {
    googleAuth: 'auth/google', //used
    loginSuccess: '/auth/login', //used
  },

  social: {
    createSocialLink: (userId: string) => `/social/${userId}`,
    getAllSociallinks: (userId: string) => `/social/${userId}`,
    updateSocialLink: (id: string) => `/social/${id}/`,
    deleteSocialLink: (id: string) => `/social/${id}/delete`,
  },

  aptitude: {
    createAptitude: '/aptitude/create-aptitude',
    getAllAptitudes: '/aptitude',
    getAptitudesById: (id: string) => `/aptitude/${id}`,
    updateAptitude: (id: string) => `/aptitude/update-aptitude/${id}/`,
    deleteAptitude: (id: string) => `/aptitude/delete-aptitude/${id}`,
  },

  question: {
    createQuestion: '/questions/create-question',
    getPaginatedQuestions: '/questions',
    getQuestionById: (id: string) => `/questions/${id}`,
    getQuestionsByAptitude: (aptitudeId: string) => `/questions/question-aptitude/${aptitudeId}`,
    updateQuestion: (id: string) => `/questions/update-question/${id}`,
    deleteQuestion: (id: string) => `/questions/delete-question/${id}`,

    getRandomQuestions: '/questions/random-question',
  },

  answer: {
    createAnswer: `/questions/create-ans`, // Add this new section
  },

  option: {
    createOption: '/options/create-option',
    getOptionsByQuestion: (questionId: string) => `/options/option-quesition/${questionId}`,
    getOptionById: (id: string) => `/options/${id}`,
    updateOption: (id: string) => `/options/update-option/${id}`,
    deleteOption: (id: string) => `/options/delete-option/${id}`,
  },

  userAptitudeDetails: {
    createUserAptitudeDetails: '/users/create-details',
    getUserAptitudeDetails: (userId: string) => `/users/get-details/${userId}`,
    updateUserAptitudeDetails: (userId: string) => `/users/update-details/${userId}`,
    deleteUserAptitudeDetails: (userId: string) => `/users/delete-details/${userId}`,
  },

  userAptitude: {
    getAptitudes: '/users/aptitude',
  },

  contest: {
    createContest: '/contest/create-contest',
    getAllContests: '/contest',
    getContestById: (id: string) => `/contest/${id}`,
    updateContest: (id: string) => `/contest/update-contest/${id}`,
    deleteContest: (id: string) => `/contest/delete-contest/${id}`,
  },

  contestProblems: {
    createContestProblems: '/contest/create/problem',
    getContestProblemsByYear: '/contest/problems',
    getAllContestProblems: (contestId: string) => `/contest/get/${contestId}`,
    updateContestProblem: (id: string) => `/contest/update/${id}`,
    deleteContestProblem: (id: string) => `/contest/delete/${id}`,
  },

  codingQuestionRoutes: {
    createCodingQuestion: '/problems/create//coding-question',
    getAllCodingQuestions: '/problems',
    getCodingQuestionsByContest: (contestId: string) => `/problems/${contestId}`,
    updateCodingQuestion: (id: string) => `/problems/update/coding-question/${id}`,
    deleteCodingQuestion: (id: string) => `/problems/delete/coding-question/${id}`,
  },

  testCases: {
    createTestCase: '/contest/crate-testcase',
    getAllTestCasesForProblem: (contestProblemId: string) => `/contest/all/${contestProblemId}`,
    updateTestCase: (id: string) => `/contest/update-testcase/${id}`,
    deleteTestCase: (id: string) => `/contest/delete-testcase/${id}`,
  },

  notification: {
    subscribe: `/notification/subscribe`,
    getNotifications: (userId: string) => `/notification/get/${userId}`,
    sendNotifications: '/notification/send-notification',
    getSubscription: '/notification/all',
    //markAsRead: (notificationId: string) =>`/notification/mark-read/${notificationId}`,
  },
};
