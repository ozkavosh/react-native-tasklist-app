export default {
  home: {
    welcomeMessage: 'Welcome',
    logoutBtnTitle: 'Logout',
    addTaskBtnTitle: 'Add Task',
    clockGreetingMorning: 'Good morning',
    clockGreetingEvening: 'Good evening',
    clockGreetingNight: 'Good afternoon',
    taskListTitle: 'Task List',
    taskListHeaderTitle: 'Daily Tasks',
    taskListEmptyMessage: 'Your list is empty',
    taskListEmptySpanMessage: 'Add some tasks!',
  },
  onBoarding: {
    headingText: 'Fulfill your tasks with TODo!',
    descriptionText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, tempora.Esse natus suscipit cumque perspiciatis eos, aliquam quae ducimus iurequasi.',
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
    passwordConfirm: 'passwordConfirm',
    description: 'description',
  },
  formValidations: {
    passwordMatch: 'Both passwords must be the same',
    passwordLength: 'Password must be at least 7 characters long',
    nameFormat: 'Name may only contain letters and spaces',
    emailFormat: 'Email must have a valid format',
    emptyField: field => `Field ${field} can not be empty`,
  },
  addTask: {
    addTaskTitle: 'Add a new Task',
    addTaskBtnTitle: 'Add Task',
    checkedText: 'Check as completed',
  },
  signIn: {
    welcomeMessage: 'Welcome back!',
    passwordMessage: 'Forgot password?',
    buttonTitle: 'Sign in',
    signUpText: "Don't have an account yet?",
    signUpSpanText: 'Create one',
  },
  signUp: {
    welcomeMessage: 'Welcome aboard!',
    subtitleMessage: 'The help that you need to get your tasks done',
    buttonTitle: 'Sign Up',
    signInText: 'Already have an account?',
    signInSpanText: 'Log in',
  },
  displayMessages: {
    userWelcomeMessage: user => `Welcome ${user}`,
    taskCreationSuccessMessage: 'Task created successfully!',
    defaultErrorMessage: 'Unexpected error!',
    AE1: "Couldn't find an user with that information",
    AE2: 'Wrong password',
    AE3: 'Email already in use',
  },
};