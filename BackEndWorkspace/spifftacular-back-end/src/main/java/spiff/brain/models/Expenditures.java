package spiff.brain.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="expenditures")
public class Expenditures {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	@JoinColumn(name="finances_id")
	private int financeId;
	
	@Column(name="type")
	private String expenditureType;
	@Column(name="monthly_cost")
	private double monthlyCost;
	@Column(name="deprecated")
	private boolean deprecated;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getFinanceId() {
		return financeId;
	}
	public void setFinanceId(int financeId) {
		this.financeId = financeId;
	}
	public String getExpenditureType() {
		return expenditureType;
	}
	public void setExpenditureType(String expenditureType) {
		this.expenditureType = expenditureType;
	}
	
	public double getMonthlyCost() {
		return monthlyCost;
	}
	public void setMonthlyCost(double monthlyCost) {
		this.monthlyCost = monthlyCost;
	}
	public boolean isDeprecated() {
		return deprecated;
	}
	public void setDeprecated(boolean deprecated) {
		this.deprecated = deprecated;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (deprecated ? 1231 : 1237);
		result = prime * result + ((expenditureType == null) ? 0 : expenditureType.hashCode());
		result = prime * result + financeId;
		result = prime * result + id;
		long temp;
		temp = Double.doubleToLongBits(monthlyCost);
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
		Expenditures other = (Expenditures) obj;
		if (deprecated != other.deprecated)
			return false;
		if (expenditureType == null) {
			if (other.expenditureType != null)
				return false;
		} else if (!expenditureType.equals(other.expenditureType))
			return false;
		if (financeId != other.financeId)
			return false;
		if (id != other.id)
			return false;
		if (Double.doubleToLongBits(monthlyCost) != Double.doubleToLongBits(other.monthlyCost))
			return false;
		return true;
	}
	public Expenditures(int id, int financeId, String expenditureType, double monthlyCost, boolean deprecated) {
		super();
		this.id = id;
		this.financeId = financeId;
		this.expenditureType = expenditureType;
		this.monthlyCost = monthlyCost;
		this.deprecated = deprecated;
	}
	public Expenditures() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
