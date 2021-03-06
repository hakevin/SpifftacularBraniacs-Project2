package spiff.brain.services;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spiff.brain.models.User;
import spiff.brain.repositories.UserRepository;

@Service
public class UserService {
	
	UserRepository userRepository;

	@Autowired
	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public void addUser(User user) {
		user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
		 userRepository.save(user);
	}

	public User checkCredentials(User user) {
		User userTo = userRepository.getUserByUsername(user.getUsername());
		if(userTo != null) {
			if(BCrypt.checkpw(user.getPassword(), userTo.getPassword()))
					return userTo;
			} else 
			return null;
		return null;
	}
	
	
}
