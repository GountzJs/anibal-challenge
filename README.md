# Configuración del proyecto

Stack técnico:

- Vscode
- Vue.js
- MSW
- Node.js ^20.19.0 || >=22.12.0
- [Bun](https://bun.sh/)

> El uso de Bun es solo para simplificar la instalación.
> No se evalúa conocimiento específico de Bun.

## Instalación

```bash
bun install
```

## Inicio del servidor

```bash
bun start
```

## ⏱️ TIEMPO ESTIMADO: 1 HORA

- Priorizar camino exitoso, no pierdas tiempo en manejo de errores
- 3 pantallas simples, scope controlado para 1h
- Arquitectura armada, usa el tiempo para seguir las mejores practicas en la estructura prestablecida

## Enfoque recomendado

Este ejercicio está diseñado para dedicarle ~1 hora de código, sin importar su completitud en cuanto a funcionalidades.

**Prioridades:**

1. Funcionalidad del camino feliz
2. Adherencia a la arquitectura existente
3. Código limpio y legible
4. Manejo de errores (baja prioridad)
5. NO se evaluará: testing, responsive, ui muy personalizada

**Tips:**

- Revisá primero la estructura del proyecto
- Implementá feature por feature
- Si algo no queda claro, usá criterio y documentalo
- Es mejor terminar 2 features completas que 3 incompletas
- Puedes modificar el código existente, pero justifica tus decisiones

## Proyecto Base

Este proyecto implementa Clean Architecture con Vue.
Antes de comenzar, familiarizate con la estructura del proyecto.

El proyecto implementa Clean Architecture con la siguiente estructura:

```text
src/app
    | modules/
        | auth/               # Feature de autenticación
        | consultorios/       # Feature de gestión de consultorios
        | turnos/             # Feature de gestión de turnos
        | common/             # Componentes compartidos
    | pages/              # Páginas
    | layouts/            # Layouts
```

**Cada feature tiene:**

- `domain/` - Entidades y contratos
- `application/` - Casos de uso
- `infrastructure/` - Implementaciones
- `presentation/` - Componentes UI

## Qué incluye el proyecto base

El proyecto ya tiene:

- Estructura de carpetas por features (auth, consultorios, turnos)
- Configuración de Vue
- Un mock para correr en modo desarrollo

Necesitás completar las 3 pantallas implementando:

- Los componentes
- Consumo de Api
- Layouts (si aplican)
- Páginas

## Criterios de evaluación

1. **Adherencia arquitectónica (40%)**
   - Respetás las capas definidas
   - Usás las abstracciones existentes
   - Seguís los patrones del código base

2. **Implementación funcional (30%)**
   - Features completas y funcionando
   - Manejo de errores (baja prioridad)

3. **Calidad de código (20%)**
   - TypeScript apropiado
   - Naming conventions del proyecto

4. **Criterio técnico (10%)**
   - Decisiones justificadas
   - Propuestas de mejora documentadas (sin implementar si rompen patrones)

## Documentación (Opcional pero valorada)

Si tomaste decisiones técnicas o de interfaz importantes, podés documentarlas brevemente:

- ¿Por qué creaste de X forma el servicio http?
- ¿Por qué organizaste los componentes de Y manera?
- ¿Por qué los datos se ven de tal manera?

Puede ser un simple `DECISIONS.md` o comentarios en el código.

## Ejercicio de entrevista - MediTurno

MediTurno es una clínica médica que tradicionalmente trabajó con turnos telefónicos y presenciales. Ahora quiere digitalizar su sistema de gestión de turnos para médicos y está probando una solución web para que los profesionales de la salud puedan ver y gestionar sus consultas programadas.

El objetivo es crear una página de ingreso, una selección del consultorio médico con el que quiere operar el profesional, y una lista de turnos programados para ese consultorio.

### Requerimientos

[Documentación Api](./docs/api.yaml)

[Figma Design](https://www.figma.com/design/hfb1PhMREldGCJMBPiJq5b/MediTurno?node-id=10-16&t=k22PVl9DpZ6sYK2X-1)

#### LOGIN - Pantalla Principal

[Prototipo](./docs/login.png)

Ruta: /

    Definición:

    - Texto de presentación: "MediTurno"
    - Texto de descripción: "Acceso para profesionales de la salud"
    - Campos: Matrícula Profesional / PIN
    - Botón "Ingresar"

    Validación de campos:

    - Matrícula debe ser alfanumérica y tener exactamente 8 caracteres
    - PIN debe ser numérico y tener exactamente 6 dígitos
    - Ambos campos obligatorios

    Consulta api:
        - Al dar click en botón ingresar debe llamarse a POST '/api/auth/sign-in'.

    Manejo de respuesta:
        - En caso de ser exitoso guardar la autenticación y redireccionar a GET /seleccionar-consultorio.
        - En caso de haber un error 406 listar arriba del formulario los errores en rojo.
        - En caso de haber otro error mostrar arriba del formulario como único error: "Error genérico del sistema, vuelva a intentarlo más tarde".

#### SELECCIONAR CONSULTORIO:

[Prototipo](./docs/consultorios.png)

Ruta: /seleccionar-consultorio

    Definición:
        - Título: "Seleccionar consultorio"
        - Subtítulo: "Elegí el consultorio desde donde vas a atender hoy"
        - Listar consultorios disponibles mostrando:
            - Nombre del consultorio
            - Número de sala
            - Especialidad
        - Al seleccionar: guardar consultorio y redireccionar a /turnos

    Consulta api:
        - Buscar las consultorios en el GET '/api/consultorios'

    Manejo de respuesta:
        - Se listan los consultorios disponibles
        - En caso de error volver al login borrando la sesión

#### LISTADO DE TURNOS

[Prototipo](./docs/turnos.png)

Ruta: /turnos

    Definición:
    - Tabla con columnas: (Hora) (Paciente) (DNI) (Obra Social) (Tipo de Consulta) (Estado)

    Visualización de Estados:

        - CONFIRMADO → "Confirmado" (verde)
        - AUSENTE → "Ausente" (rojo)
        - EN_ATENCION → "En atención" (amarillo)
        - FINALIZADO → "Finalizado" (gris)

    Tipos de Consulta:
        - PRIMERA_VEZ → "Primera vez"
        - CONTROL → "Control"
        - URGENCIA → "Urgencia"

    Consulta API:
        - GET /api/turnos

    Manejo de respuesta:
        - Listar turnos en tabla
        - Error: "No se pudieron cargar los turnos programados. Intente nuevamente."
