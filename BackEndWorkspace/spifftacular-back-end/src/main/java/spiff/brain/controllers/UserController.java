package spiff.brain.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import spiff.brain.models.Credentials;
import spiff.brain.models.User;
import spiff.brain.services.UserService;

@CrossOrigin(origins="*", allowCredentials = "true") 
@RestController
@RequestMapping("users")
public class UserController {
	
	UserService userService;
	
	
	@Autowired
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}



	@PostMapping("register")
	public void registerUser(@RequestBody User user) {
		userService.addUser(user);
	}
	@PostMapping("login")
	public void LoginUser(@RequestBody Credentials credentials) {
		userService.checkCredentials(credentials);
	}
}
