# WorkoutsWeb

## [See the App!](https://workouts-web.netlify.app)


## Description

**-** **WorkoutWeb** es una app que permite entrenar desde cualquier dispositivo, mediante el uso de rutinas de difetentes disciplinas del fitness. Por una parte, el coach "trainer" tiene la posibilidad de crear ejercicios únicos "Workouts". Con estos "Workouts" el coach podrá crear rutinas de trabajo, que se compondrán de todos los "Workouts" que estime oportuno.
Finalmente el usuario registrado recibe la posibilidad de añadir cualquiera de estas rutinas a su perfil de usuario, y entrenar con ellas con la función Trainer Mode.
#### [Client Repo here](https://github.com/FelixFS3D/client-workoutweb)
#### [Server Repo here](https://github.com/FelixFS3D/server-workoutweb)

## Backlog Functionalities

**NOTE -** Registro de marcas en la función de usuario mediante gráficos, una vez se haya entrenado cada rutina.

## Technologies used

**NOTE -** JavasCript, NodeJS, MongoDB, Mongoose, Postman, Bcrypt, Cookie-parser, Morgan, Cloudinary.

# Server Structure

## Models

User model

```javascript
{
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    name: String,
    imgUser: String,
    routines: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Routine" 
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    }
  }
```

Workouts model

```javascript
 {

name: String,
level: String,
series: Number,
rest: Number,
workouts:{
    type: [ mongoose.Schema.Types.ObjectId ],
    ref: "Workout"
},
}
```

Routines model

```javascript
 {

name: String,
level: String,
series: Number,
rest: Number,
workouts:{
    type: [ mongoose.Schema.Types.ObjectId ],
    ref: "Workout"
},
}
```

## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                    |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | -------------------------------------------------------------- |
| POST        | `/auth/signup`              | {name, email, password}      | 201            | 400          | Registers the user in the Database                             |
| POST        | `/auth/login`               | {username, password}         | 200            | 400          | Validates credentials, creates and sends Token                 |
| GET         | `/auth/verify`              |                              | 200            | 401          | Verifies the user Token                                        |
| GET         | `/workouts`                 |                              | 200            | 400          | Show workouts in the DB                                        |
| POST        | `/workouts`                 | {apiId}                      | 201            | 400          | Creates a new workouts                                         |
| GET         | `/workouts/:workoutId`      |                              | 200            | 400, 401     | Sends all workouts Details                                     |
| PUT         | `/workouts/:workoutId`      |                              | 200            | 400, 401     | Edits workouts document                                        |
| DELETE      | `/workouts/:workoutId`      |                              | 200            | 401          | Deletes workouts document                                      |
| GET         | `/routines`                 |                              | 200            | 401          | Sends user routines details                                    |
| GET         | `/routines/:routinesId`     |                              | 200            | 401          | Sends user some routine details                                |
| POST        | `/routines`                 |                              | 200            | 401          | Creates user routines details                                  |
| PUT         | `/routines/:routinesId`     |                              | 200            | 400, 401     | Edits the user routines                                        |
| DELETE      | `/routines/:routinesId`     |                              | 200            | 401          | Add new routines to user                                       |
| PATCH       | `/routine-add`              |                              | 201            | 401          | Edit routine user                                              |
| PATCH       | `/routine-delete`           |                              | 201            | 401          | Delete routine user                                            |
| PUT         | `/:usersId`                 |                              | 201            | 401          | Edit all user info                                             |
| GET         | `/user`                     |                              | 201            | 401          | Show all user info                                             |
| GET         | `/users/own`                |                              | 201            | 401          | Take routines from a user                                      |

  
## Links

### Collaborators

[Félix](https://github.com/FelixFS3D)

[Iñigo](https://github.com/inigoestebangomez)

### Project

[Repository Link Client](https://github.com/FelixFS3D/client-workoutweb)

[Repository Link Server](https://github.com/FelixFS3D/server-workoutweb)

[Deploy Link](https://workouts-web.netlify.app)

### Excalidraw

[Link to your Excalidraw board](https://excalidraw.com/#json=6WDynWOc1NO4FPiOrs5VM,RxU0Gg6FjFJbFfXA94u3AQ)

### Slides

[Slides Link](https://www.canva.com/design/DAGOArjprrc/Vnvefijgk1MHd5y2YZSdrg/view?utm_content=DAGOArjprrc&utm_campaign=designshare&utm_medium=link&utm_source=editor)