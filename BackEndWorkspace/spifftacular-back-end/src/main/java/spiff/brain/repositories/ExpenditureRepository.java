package spiff.brain.repositories;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import spiff.brain.models.Expenditures;

@Repository
public class ExpenditureRepository {

	SessionFactory sf;
	
	@Autowired
	public ExpenditureRepository(SessionFactory sf) {
		super();
		this.sf = sf;
	}

	public void addExpenditure(Expenditures expenditure) {
		sf.getCurrentSession().saveOrUpdate(expenditure);
	}

	public Expenditures getExpenditureById(int id) {
		return sf.getCurrentSession().get(Expenditures.class, id);
	}

	public List<Expenditures> getExpenditureByFinanceId(int id) {
		String hql = "FROM Expenditures e WHERE e.financeId = :id AND e.deprecated = false";
		return sf.getCurrentSession().createQuery(hql).setParameter("id", id).list();
	}

	public void update(Expenditures expenditure) {
		sf.getCurrentSession().beginTransaction();
		sf.getCurrentSession().merge(expenditure);
		sf.getCurrentSession().getTransaction().commit();
	}
	
}
