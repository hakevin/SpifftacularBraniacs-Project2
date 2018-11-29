package spiff.brain.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import spiff.brain.models.FinanceUpdate;
import spiff.brain.models.Finances;
import spiff.brain.services.FinanceService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("finances")
public class FinanceController {
	
	FinanceService financeService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("")
	public void addFinance(@RequestBody Finances finance) {
		financeService.save(finance);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("{id}")
	public ResponseEntity<Finances> getFinanceById(@PathVariable int id)  {
		Finances check = financeService.getFinanceById(id);
		if(check != null)
			return new ResponseEntity<>(check, HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	
	@PutMapping("{id}")
	public void updateFinanceById(@PathVariable int id, @RequestBody FinanceUpdate financeUpdate) {
		financeService.updateFinance(id, financeUpdate);
	}

	@Autowired
	public FinanceController(FinanceService financeService) {
		super();
		this.financeService = financeService;
	}
	
	
}
