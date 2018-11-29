package spiff.brain.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import spiff.brain.models.User;
import spiff.brain.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
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
	public ResponseEntity<Integer> LoginUser(@RequestBody User user) {
		User userTo = userService.checkCredentials(user);
		if(userTo != null) {
			return new ResponseEntity<>(userTo.getId(), HttpStatus.ACCEPTED);
		} else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
}
