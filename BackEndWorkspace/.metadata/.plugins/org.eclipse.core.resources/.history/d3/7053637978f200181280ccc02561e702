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
	private double achievedDate;
	@Column(name="start_date")
	private double startDate;
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
	public double getAchievedDate() {
		return achievedDate;
	}
	public void setAchievedDate(double achievedDate) {
		this.achievedDate = achievedDate;
	}
	public double getStartDate() {
		return startDate;
	}
	public void setStartDate(double startDate) {
		this.startDate = startDate;
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(achievedDate);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		temp = Double.doubleToLongBits(cost);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + (deprecated ? 1231 : 1237);
		result = prime * result + financeId;
		result = prime * result + id;
		result = prime * result + ((itemName == null) ? 0 : itemName.hashCode());
		temp = Double.doubleToLongBits(startDate);
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
		Goals other = (Goals) obj;
		if (Double.doubleToLongBits(achievedDate) != Double.doubleToLongBits(other.achievedDate))
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
		if (Double.doubleToLongBits(startDate) != Double.doubleToLongBits(other.startDate))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Goals [id=" + id + ", itemName=" + itemName + ", cost=" + cost + ", achievedDate=" + achievedDate
				+ ", startDate=" + startDate + ", financeId=" + financeId + ", deprecated=" + deprecated + "]";
	}
	public Goals(String itemName, double cost, double achievedDate, double startDate, int financeId,
			boolean deprecated) {
		super();
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
	public Goals(int id, String itemName, double cost, double achievedDate, double startDate, int financeId,
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
	
}
