export default {
    home: {
        welcomeMessage: "Bienvenido",
        logoutBtnTitle: "Cerrar sesión",
        addTaskBtnTitle: "Agregar tarea",
        clockGreetingAM: "Buenos días",
        clockGreetingPM: "Buenas tardes",
        taskListTitle: "Lista de tareas",
        taskListHeaderTitle: "Tareas diarias"
    },
    onBoarding: {
        headingText: "Completa tus tareas con TODo!",
        getStartedBtnTitle: "Comenzar"
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
        addTaskBtnTitle: "Agregar tarea"
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
    }
}