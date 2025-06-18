# React + Next.js Modular Application



This project is a modular React application using **Next.js App Router**. It follows best practices for state management, form handling, and modular architecture using powerful libraries such as React Query, React Hook Form, Material UI, and more.



---



## 📦 Tech Stack



### Framework



* **Next.js (App Router)**: Enables modern file-based routing and server-side rendering capabilities with a strong React foundation.



### Core Libraries



* **React Query (@tanstack/react-query)**: Used for efficient data fetching, caching, and background synchronization.

* **React Hook Form**: Simplifies form state management with performant and intuitive API.

* **Yup**: Provides schema-based form validation, integrated with React Hook Form.



### UI



* **Material UI (MUI)**: Provides a customizable component library following Material Design.

* **@mui/x-date-pickers**: Advanced and accessible date/time pickers integrated with MUI.

* **@emotion/react & @emotion/styled**: Enables custom and theme-aware styling in MUI components.

* **Day.js**: Lightweight alternative to Moment.js for parsing, validating, and formatting dates.



### State Management



* **React Context + useReducer**: Used for global state management in combination with Context API for modular, scalable architecture.

* **Custom Hooks**: Encapsulates logic and interactions with reducers and contexts.



---



## 📁 Project Structure & Code Organization



The application is organized **by feature module**. Each module (e.g., `auth`) contains all related logic in a self-contained directory structure:



### Example: `/auth` Module



```

auth/

├── _components/       # All reusable components related to auth

│   ├── AuthContextProvider.tsx   # Provides AuthContext to the app

│   └── ProtectedComponent.tsx    # Wrapper to protect content based on auth state

├── _constants/

│   └── initialState.ts           # Initial state for auth context

├── _contexts/

│   └── authContext.ts            # React Context for authentication

├── _enums/

│   └── authActionTypes.ts        # Enum of reducer action types

├── _hooks/

│   ├── useIsAuthenticated.ts     # Hook to check authentication status

│   └── useLoadAuth.ts            # Hook to load token into context

├── _reducers/

│   └── authReducer.ts            # Reducer logic for authentication state

├── _services_types/              # Interfaces and service logic (if applicable)

```



### Navigation & Routing



* Uses Next.js **App Router** (`/app` directory)

* Supports layouts, nested routing, and route-based loading patterns



---



## ✅ Why This Stack



| Library/Tool             | Reason                                                              |

| ------------------------ | ------------------------------------------------------------------- |

| **Next.js (App Router)** | Modern routing, SSR/SSG support, scalable structure                 |

| **React Query**          | Efficient data caching & revalidation                               |

| **React Hook Form**      | Lightweight, performant forms                                       |

| **Yup**                  | Declarative schema validation                                       |

| **MUI + X Date Pickers** | Rapid UI development with Material Design components                |

| **Emotion**              | Powerful CSS-in-JS solution with full MUI support                   |

| **Day.js**               | Small and fast date utility library                                 |

| **Reducer + Context**    | Clean state management without the complexity of external libraries |

| **Modular Architecture** | Improves maintainability and scalability                            |



---



## 🚀 Getting Started



1. **Install dependencies**



```bash

yarn install # or npm install

```



2. **Run the dev server**



```bash

yarn dev # or npm run dev

```



3. **Project structure** follows a modular approach. To add a new feature, create a new folder under `/modules` or `/app` and follow the same pattern as `auth`.



---



## 📌 Notes



* The use of context and reducers enables a scalable state pattern without relying on third-party solutions like Redux.

* All context/reducer logic is encapsulated per module.

* Navigation uses Next.js App Router with layouts and dynamic segments.



---



## 📚 License



This project is licensed under the MIT License.



---



Happy coding! 🚀