package spiff.brain.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;


@Entity
@Table(name="finances")
public class Finances {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	@Column(name="wage")
	private double wage;
	
	@JoinColumn(name="users_id")
	private int userId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getWage() {
		return wage;
	}

	public void setWage(double wage) {
		this.wage = wage;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + userId;
		long temp;
		temp = Double.doubleToLongBits(wage);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Finances other = (Finances) obj;
		if (id != other.id)
			return false;
		if (userId != other.userId)
			return false;
		if (Double.doubleToLongBits(wage) != Double.doubleToLongBits(other.wage))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Finances [id=" + id + ", wage=" + wage + ", userId=" + userId + "]";
	}

	public Finances(int id, double wage, int userId) {
		super();
		this.id = id;
		this.wage = wage;
		this.userId = userId;
	}

	public Finances(double wage, int userId) {
		super();
		this.wage = wage;
		this.userId = userId;
	}

	public Finances() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
