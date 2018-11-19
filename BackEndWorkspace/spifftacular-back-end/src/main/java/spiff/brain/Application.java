package spiff.brain;

import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
	
	//static SessionFactory sf;
	static Logger log = Logger.getRootLogger();
	
	
	public static void main(String[] args)  {
//		SessionFactory factory = new Configuration()
//				.configure("hibernate.cfg.xml")
//				.addAnnotatedClass(User.class)
//				.addAnnotatedClass(Expenditures.class)
//				.addAnnotatedClass(Goals.class)
//				.addAnnotatedClass(Finances.class)
//				.buildSessionFactory();
//		
//		Session session = factory.openSession();
//		
//		log.fatal(factory);
//		try {
//			System.out.println("Creating a new user");
//			User user = new User("skilled","Paul Wall", "Paul", "Wall", "grillz@me.com");
//			
//			session.beginTransaction();
//			
//			System.out.println("saving the user");
//			
//			session.save(user);
//			
//			session.getTransaction().commit();
//			
//			System.out.println("worked!");
//			
//		} finally {
//			factory.close();
//		}
//		
		SpringApplication.run(Application.class, args);
	}
	
	
//	
//	public static SessionFactory setupSessionFactory() {
//		Configuration configuration = new Configuration()
//				.configure("hibernate.cfg.xml")
////				.setProperty("hibernate.connection.url", System.getenv("DB_URL"))
//				
//		
//		ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
//				.applySettings(configuration.getProperties()).build();
//		return configuration.buildSessionFactory(serviceRegistry);
//	}
}
