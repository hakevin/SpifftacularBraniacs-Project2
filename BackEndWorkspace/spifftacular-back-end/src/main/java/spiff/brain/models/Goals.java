package spiff.brain.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="goals")
public class Goals {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	@Column(name="item")
	private String itemName;
	@Column(name="cost")
	private double cost;
	@Column(name="achieved_date")
	private String achievedDate;
	@Column(name="start_date")
	private String startDate;
	@JoinColumn(name="finances_id")
	private int financeId;
	@Column(name="deprecated")
	private boolean deprecated;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	public int getFinanceId() {
		return financeId;
	}
	public void setFinanceId(int financeId) {
		this.financeId = financeId;
	}
	public boolean isDeprecated() {
		return deprecated;
	}
	public void setDeprecated(boolean deprecated) {
		this.deprecated = deprecated;
	}
	public String getAchievedDate() {
		return achievedDate;
	}
	public void setAchievedDate(String achievedDate) {
		this.achievedDate = achievedDate;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((achievedDate == null) ? 0 : achievedDate.hashCode());
		long temp;
		temp = Double.doubleToLongBits(cost);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + (deprecated ? 1231 : 1237);
		result = prime * result + financeId;
		result = prime * result + id;
		result = prime * result + ((itemName == null) ? 0 : itemName.hashCode());
		result = prime * result + ((startDate == null) ? 0 : startDate.hashCode());
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
		Goals other = (Goals) obj;
		if (achievedDate == null) {
			if (other.achievedDate != null)
				return false;
		} else if (!achievedDate.equals(other.achievedDate))
			return false;
		if (Double.doubleToLongBits(cost) != Double.doubleToLongBits(other.cost))
			return false;
		if (deprecated != other.deprecated)
			return false;
		if (financeId != other.financeId)
			return false;
		if (id != other.id)
			return false;
		if (itemName == null) {
			if (other.itemName != null)
				return false;
		} else if (!itemName.equals(other.itemName))
			return false;
		if (startDate == null) {
			if (other.startDate != null)
				return false;
		} else if (!startDate.equals(other.startDate))
			return false;
		return true;
	}
	public Goals(int id, String itemName, double cost, String achievedDate, String startDate, int financeId,
			boolean deprecated) {
		super();
		this.id = id;
		this.itemName = itemName;
		this.cost = cost;
		this.achievedDate = achievedDate;
		this.startDate = startDate;
		this.financeId = financeId;
		this.deprecated = deprecated;
	}
	public Goals() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
