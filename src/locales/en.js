export default {
  home: {
    welcomeMessage: 'Welcome',
    logoutBtnTitle: 'Logout',
    addTaskBtnTitle: 'Add Task',
    clockGreetingMorning: 'Good Morning',
    clockGreetingEvening: 'Good Evening',
    clockGreetingNight: 'Good Night',
    taskListRemaining: (remaining) => remaining === 1 ? `You have ${remaining} pending task` : `You have ${remaining} pending tasks`,
    taskListNoRemaining: 'You have no pending tasks',
    taskListHeaderTitle: 'Daily Tasks',
    taskListEmptyMessage: 'Your list is empty',
    taskListEmptySpanMessage: 'Start adding some tasks!',
    taskDeletionConfirmMessage: '¿Are you sure you want to remove this task?',
    taskDeletionConfirmBtn: 'Remove',
    taskDeletionCancelBtn: 'Cancel'
  },
  onBoarding: {
    headingText: 'Get your tasks done with TODo!',
    descriptionText: `
¡Welcome to TODo App! 
Start organizing your tasks
to set an order to your day
¡Lets seize the time!`,
    getStartedBtnTitle: 'Get Started',
    closingAlertTitle: 'Hold on!',
    closingAlertMessage: '¿Are you sure you want to exit TODo?',
    closingAlertCancelBtn: 'Cancel',
    closingAlertConfirmBtn: 'Yes',
  },
  form: {
    placeholderDefault: field => `Enter your ${field}`,
    placeholderPasswordConfirm: 'Confirm your password',
  },
  formFields: {
    email: 'email',
    password: 'password',
    name: 'name',
    passwordConfirm: 'password confirm',
    description: 'description',
  },
  formValidations: {
    passwordMatch: 'Passwords must be the same',
    passwordLength: 'Password must be at least 7 characters long',
    nameFormat: 'Name may only contain letters and spaces',
    emailFormat: 'Email must be a valid one',
    emptyField: field => `Field ${field} can not be empty`,
  },
  addTask: {
    addTaskTitle: 'Add new task',
    addTaskBtnTitle: 'Add task',
    editTaskTitle: 'Edit task',
    editTaskBtnTitle: 'Confirm changes',
    checkedText: 'Check as completed',
  },
  signIn: {
    welcomeMessage: 'Welcome back!',
    passwordMessage: 'Forgot password?',
    buttonTitle: 'Sign In',
    signUpText: 'You do not have an account yet?',
    signUpSpanText: 'Create a new one',
  },
  signUp: {
    welcomeMessage: 'Welcome aboard!',
    subtitleMessage: 'The help to get your things done',
    buttonTitle: 'Sign Up',
    signInText: 'Already have an account?',
    signInSpanText: 'Log In',
  },
  displayMessages: {
    userWelcomeMessage: user => `Welcome ${user}`,
    taskCreationSuccessMessage: 'Task successfully created!',
    taskUpdateSuccessMessage: 'Task successfully updated!',
    taskDeletionSuccessMessage: 'Task successfully removed!',
    defaultErrorMessage: 'Unexpected error!',
    successMessageTitle: 'Success!',
    errorMessageTitle: 'Error!',
    AE1: 'User was not found',
    AE2: 'Password does not match',
    AE3: 'Email already in use',
  },
  sideMenu: {
    toggleLanguageLabel: 'Switch Language',
    logoutLabel: 'Log Out'
  }
};
