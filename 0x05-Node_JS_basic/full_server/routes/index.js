import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const configureRoutes = (route) => {
  route.get('/', AppController.getHomepage);
  route.get('/students', StudentsController.getAllStudents);
  route.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default configureRoutes;
