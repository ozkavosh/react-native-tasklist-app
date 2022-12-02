export default {
  home: {
    welcomeMessage: 'Bienvenido',
    logoutBtnTitle: 'Cerrar sesión',
    addTaskBtnTitle: 'Agregar tarea',
    clockGreetingMorning: 'Buenos días',
    clockGreetingEvening: 'Buenas tardes',
    clockGreetingNight: 'Buenas noches',
    taskListRemaining: (remaining) => remaining === 1 ? `Tiene ${remaining} tarea pendiente` : `Tiene ${remaining} tareas pendientes`,
    taskListNoRemaining: 'No tiene tareas pendientes',
    taskListHeaderTitle: 'Tareas diarias',
    taskListEmptyMessage: 'Su lista esta vacía',
    taskListEmptySpanMessage: 'Agregue algunas tareas!',
    taskDeletionConfirmMessage: '¿Está seguro de eliminar la tarea?',
    taskDeletionConfirmBtn: 'Eliminar',
    taskDeletionCancelBtn: 'Cancelar'
  },
  onBoarding: {
    headingText: 'Complete sus tareas con TODo!',
    descriptionText: `
¡Bienvenido a TODo App! 
Comience a organizar sus tareas
y dele un orden a sus días.
¡Vamos a aprovechar el tiempo!`,
    getStartedBtnTitle: 'Comenzar',
    closingAlertTitle: 'Espere!',
    closingAlertMessage: '¿Está seguro de salir de TODo?',
    closingAlertCancelBtn: 'Cancelar',
    closingAlertConfirmBtn: 'Si',
  },
  form: {
    placeholderDefault: field => `Ingrese su ${field}`,
    placeholderPasswordConfirm: 'Confirme su contraseña',
  },
  formFields: {
    email: 'correo',
    password: 'contraseña',
    name: 'nombre',
    passwordConfirm: 'confirmar contraseña',
    description: 'descripción',
  },
  formValidations: {
    passwordMatch: 'Las contraseñas deben coincidir',
    passwordLength: 'La contraseña debe tener como mínimo 7 caracteres',
    nameFormat: 'El nombre solo puede contener letras y espacios',
    emailFormat: 'El email debe tener un formato válido de email',
    emptyField: field => `El campo ${field} no puede quedar vacío`,
  },
  addTask: {
    addTaskTitle: 'Crear nueva tarea',
    addTaskBtnTitle: 'Agregar tarea',
    editTaskTitle: 'Editar tarea',
    editTaskBtnTitle: 'Confirmar cambios',
    checkedText: 'Marcar como completado',
  },
  signIn: {
    welcomeMessage: 'Bienvenido de vuelta!',
    passwordMessage: 'Olvidó su contraseña?',
    buttonTitle: 'Ingresar',
    signUpText: 'Todavía no tiene cuenta?',
    signUpSpanText: 'Cree una nueva',
  },
  signUp: {
    welcomeMessage: 'Bienvenido a bordo!',
    subtitleMessage: 'Una ayuda para mantener al dia sus tareas',
    buttonTitle: 'Registrar',
    signInText: 'Ya tiene cuenta?',
    signInSpanText: 'Ingrese',
  },
  displayMessages: {
    userWelcomeMessage: user => `Bienvenido ${user}`,
    taskCreationSuccessMessage: 'Tarea creada con éxito!',
    taskUpdateSuccessMessage: 'Tarea actualizada con éxito!',
    taskDeletionSuccessMessage: 'Tarea eliminada con éxito',
    defaultErrorMessage: 'Error inesperado!',
    successMessageTitle: 'Éxito!',
    errorMessageTitle: 'Error!',
    AE1: 'No se encontró el usuario ingresado',
    AE2: 'La contraseña no coincide',
    AE3: 'El email ingresado ya está en uso',
  },
  sideMenu: {
    toggleLanguageLabel: 'Cambiar idioma',
    logoutLabel: 'Cerrar sesión'
  }
};
