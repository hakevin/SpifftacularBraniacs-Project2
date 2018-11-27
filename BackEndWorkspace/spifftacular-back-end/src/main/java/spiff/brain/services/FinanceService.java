package spiff.brain.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import spiff.brain.models.FinanceUpdate;
import spiff.brain.models.Finances;
import spiff.brain.repositories.FinanceRepository;

@Service
public class FinanceService {

	FinanceRepository financeRepository;
	
	public void save(Finances finance) {
		financeRepository.save(finance);
	}
	
	public Finances getFinanceById(int id) {
		return financeRepository.getFinanceById(id);
	}

	@Autowired
	public FinanceService(FinanceRepository financeRepository) {
		super();
		this.financeRepository = financeRepository;
	}

	public void updateFinance(int id, FinanceUpdate finance) {
		Finances finances = getFinanceById(id);
		finances.setWage(finance.getWage());
		financeRepository.update(finances);
	}
	
}
