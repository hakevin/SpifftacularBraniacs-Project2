package spiff.brain.repositories;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import spiff.brain.models.User;

@Repository
public class UserRepository {
	
	SessionFactory sf;
	
	public void save(User user) {
		System.out.println(user.toString());
		sf.getCurrentSession().saveOrUpdate(user);
	}

	@Autowired
	public UserRepository(SessionFactory sf) {
		super();
		this.sf = sf;
	}
<<<<<<< HEAD

	public User GetByUsername(User user) {
		return user;
//		return UserRepository.GetByUsername(user);

=======
	
	public User getUserByUsername(String username) {
		String hql = "FROM User u WHERE u.username = :username";
		List<User> user = sf.getCurrentSession().createQuery(hql).setParameter("username", username).list();
		if(user.size() > 0)
			return user.get(0);
		else
			return null;
>>>>>>> 575ce6c68973428b6f23c93286230cd7c4b266c7
	}
}
