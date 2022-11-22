export default {
    home: {
        welcomeMessage: "Bienvenido",
        logoutBtnTitle: "Cerrar sesión",
        addTaskBtnTitle: "Agregar tarea",
        clockGreetingMorning: "Buenos días",
        clockGreetingEvening: "Buenas tardes",
        clockGreetingNight: "Buenas noches",
        taskListTitle: "Lista de tareas",
        taskListHeaderTitle: "Tareas diarias",
        taskListEmptyMessage: "Su lista esta vacía",
        taskListEmptySpanMessage: "Agregue algunas tareas!"
    },
    onBoarding: {
        headingText: "Complete sus tareas con TODo!",
        getStartedBtnTitle: "Comenzar",
        closingAlertTitle: "Espere!",
        closingAlertMessage: "¿Está seguro de salir de TODo?",
        closingAlertCancelBtn: "Cancelar",
        closingAlertConfirmBtn: "Si"
    },
    form: {
        placeholderDefault: (field) => `Ingrese su ${field}`,
        placeholderPasswordConfirm: "Confirme su contraseña"
    },
    formFields: {
        email: 'correo',
        password: 'contraseña',
        name: 'nombre',
        passwordConfirm: 'confirmarContraseña',
        description: 'descripción'
    },
    formValidations: {
        passwordMatch: 'Las contraseñas deben coincidir',
        passwordLength: 'La contraseña debe tener como mínimo 7 caracteres',
        nameFormat: 'El nombre solo puede contener letras y espacios',
        emailFormat: 'El email debe tener un formato válido de email',
        emptyField: (field) => `El campo ${field} no puede quedar vacío`
    },
    addTask: {
        addTaskTitle: "Crear nueva tarea",
        addTaskBtnTitle: "Agregar tarea",
        checkedText: "Marcar como completado"
    },
    signIn: {
        welcomeMessage: 'Bienvenido de vuelta!',
        passwordMessage: 'Olvido su contraseña?',
        buttonTitle: 'Ingresar',
        signUpText: 'Todavía no tiene cuenta?',
        signUpSpanText: 'Cree una nueva'
    },
    signUp: {
        welcomeMessage: 'Bienvenido a bordo!',
        subtitleMessage: 'Una ayuda para mantener al dia sus tareas',
        buttonTitle: 'Registrar',
        signInText: 'Ya tiene cuenta?',
        signInSpanText: 'Ingrese'
    },
    displayMessages: {
        userWelcomeMessage: (user) => `Bienvenido ${user}`,
        taskCreationSuccessMessage: 'Tarea creada con éxito!',
        defaultErrorMessage: 'Error inesperado!',
        AE1: 'No se encontró el usuario ingresado',
        AE2: 'La contraseña no coincide',
        AE3: 'El email ingresado ya está en uso'
    },
}