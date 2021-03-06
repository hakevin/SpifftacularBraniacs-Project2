package spiff.brain.repositories;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import spiff.brain.models.Goals;

@Repository
public class GoalRepository {

	SessionFactory sf;
	
	public void save(Goals goal) {
		sf.getCurrentSession().saveOrUpdate(goal);
	}

	public Goals getGoalById(int id) {
		return sf.getCurrentSession().get(Goals.class, id);
	}

	@Autowired
	public GoalRepository(SessionFactory sf) {
		super();
		this.sf = sf;
	}

	public List<Goals> getGoalsByFinanceId(int id) {
		String hql = "FROM Goals g WHERE g.financeId = :id AND g.deprecated = false";
		return sf.getCurrentSession().createQuery(hql).setParameter("id", id).list();
	}

	public void update(Goals goal) {
		sf.getCurrentSession().beginTransaction();
		sf.getCurrentSession().merge(goal);
		sf.getCurrentSession().getTransaction().commit();
	}

	
}
