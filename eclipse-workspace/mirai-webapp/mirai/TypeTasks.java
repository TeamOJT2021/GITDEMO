package mirai;
// Generated Jul 4, 2021 11:39:37 PM by Hibernate Tools 4.3.1


import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * TypeTasks generated by hbm2java
 */
@Entity
@Table(name="type_tasks"
    ,schema="dbo"
    ,catalog="mirai"
)
public class TypeTasks  implements java.io.Serializable {


     private int id;
     private String name;
     private Set<Tasks> taskses = new HashSet<Tasks>(0);

    public TypeTasks() {
    }

	
    public TypeTasks(int id) {
        this.id = id;
    }
    public TypeTasks(int id, String name, Set<Tasks> taskses) {
       this.id = id;
       this.name = name;
       this.taskses = taskses;
    }
   
     @Id 

    
    @Column(name="id", unique=true, nullable=false)
    public int getId() {
        return this.id;
    }
    
    public void setId(int id) {
        this.id = id;
    }

    
    @Column(name="name", length=50)
    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }

@OneToMany(fetch=FetchType.LAZY, mappedBy="typeTasks")
    public Set<Tasks> getTaskses() {
        return this.taskses;
    }
    
    public void setTaskses(Set<Tasks> taskses) {
        this.taskses = taskses;
    }




}


