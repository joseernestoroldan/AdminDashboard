import Link from "next/link";
import styles from "./home.module.css";
export default function HomePage() {
  return (
    <div className={styles.containerFront}>
      <h1 className={styles.headerFront}>Welcome to Admin Dashboard App</h1>
      <p className={styles.paragraphFront}>
        This application showcases a robust system designed for efficient data
        management using MongoDB. It leverages Mongoose to handle database
        operations, enabling seamless insertion, updating, and deletion of data.
        Additionally, the app features a secure authentication system with
        protected routes, middleware, and server actions, ensuring both
        functionality and data security for users.
      </p>
      <p className={styles.paragraphFront}>
        The application also includes a user-friendly interface with an
        intuitive design, making it easy to navigate and interact with the
        system. The dashboard provides a comprehensive overview of the data
        stored in the database, allowing users to view, edit, and manage the
        information efficiently.
      </p>
      <p className={styles.paragraphFront}>
        The app is built using Next.js, a powerful framework that enables
        server-side rendering and static site generation, providing a fast and
        responsive user experience. It also utilizes Tailwind CSS for styling,
        ensuring a clean and modern design that is both visually appealing and
        functional.
      </p>
      <p className={styles.paragraphFront}>
        The application is deployed on Vercel, a cloud platform that provides
        seamless deployment and hosting services, ensuring that the app is
        always available and accessible to users. The combination of these
        technologies and services creates a robust and efficient system that is
        ideal for managing data and providing a secure and user-friendly
        experience.
      </p>

      <p className={styles.paragraphFront}>
        Please enjoy checking it out. You can access it with this credential:
      </p>
      <div className={styles.access}>
        <div className={styles.containerElement}>
          <span className={styles.title}>Username:</span>
          <p className={styles.value}>admin</p>
        </div>
        <div className={styles.containerElement}>
          <span className={styles.title}>Password</span>
          <p className={styles.value}>123456</p>
        </div>
        <Link className={styles.linkFront} href="/login">
          <button className={styles.buttonFront}>Login</button>
        </Link>
      </div>
      <h2 className={styles.subHeaderFront}>System Characteristics</h2>
      <h3 className={styles.thirdHeaderFront}> Database Management with MongoDB and Mongoose</h3>
      <p className={styles.paragraphFront}>
        The system integrates MongoDB as the primary data storage platform, with
        Mongoose providing an efficient way to perform queries. Users can
        execute CRUD (Create, Read, Update, Delete) operations to manage data,
        including inserting, updating, and deleting records. The app ensures
        seamless and reliable data handling, optimized for modern web
        applications.
      </p>
      <h3 className={styles.thirdHeaderFront}>Authentication and Protected Routes</h3>
      <p className={styles.paragraphFront}>
        An authentication system has been implemented using NextAuth, ensuring
        secure access to the application. Protected routes and middleware
        safeguard sensitive areas of the app, offering role-based access control
        for administrators and regular users.
      </p>
      <h3 className={styles.thirdHeaderFront}>Admin Dashboard Features</h3>
      <p className={styles.paragraphFront}>
        The system includes an intuitive admin dashboard, built with Next.js and
        styled using Tailwind CSS for a modern, responsive design. It supports
        efficient management of users and products, providing a user-friendly
        interface for administrators to monitor and update records as needed.
      </p>
      <h3 className={styles.thirdHeaderFront}>Data Visualization with Recharts</h3>
      <p className={styles.paragraphFront}>
        Recharts is integrated to visualize data effectively, enabling users to
        view trends and insights. The visualizations help administrators make
        data-driven decisions and gain a comprehensive understanding of system
        performance.
      </p>
      <h3 className={styles.thirdHeaderFront}>Deployment and Scalability</h3>
      <p className={styles.paragraphFront}>
        The application is structured to facilitate deployment on Vercel, making
        it easy to scale and manage in a production environment. Its modular
        design, with well-structured UI components, utilities, and API
        endpoints, ensures extensibility and maintainability.
      </p>
    </div>
  );
}
