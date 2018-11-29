package spiff.brain.controllers;

import java.util.List;

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

import spiff.brain.models.Expenditures;
import spiff.brain.services.ExpenditureService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("expenditures")
public class ExpenditureController {
	
	ExpenditureService expenditureService;

	@Autowired
	public ExpenditureController(ExpenditureService expenditureService) {
		super();
		this.expenditureService = expenditureService;
	}
	
	@PostMapping("")
	public void addExpenditure(@RequestBody Expenditures expenditure) {
		expenditureService.addExpenditure(expenditure);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Expenditures> getExpenditureById(@PathVariable int id) {
		Expenditures expenditure = expenditureService.getExpenditureById(id);
		if(expenditure != null) {
			return new ResponseEntity<>(expenditure, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("finance/{id}") 
	public ResponseEntity<List<Expenditures>> getExpendituresByFinanceId(@PathVariable int id) {
		List<Expenditures> expenditures = expenditureService.getExpenditureByFinanceId(id);
		if(expenditures != null) {
			return new ResponseEntity<>(expenditures, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("{id}")
	public void updateExpenditure(@RequestBody Expenditures expenditure, @PathVariable int id) {
		expenditureService.updateExpenditure(expenditure, id);
	}
	
}
