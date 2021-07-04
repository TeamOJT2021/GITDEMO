package mirai;
// Generated Jul 4, 2021 11:39:37 PM by Hibernate Tools 4.3.1


import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Tasks generated by hbm2java
 */
@Entity
@Table(name="tasks"
    ,schema="dbo"
    ,catalog="mirai"
)
public class Tasks  implements java.io.Serializable {


     private int id;
     private Projects projects;
     private TypeTasks typeTasks;
     private String content;
     private Boolean achieved;
     private String note;
     private Long score;
     private Boolean status;
     private Date createdAt;
     private Date updateAt;

    public Tasks() {
    }

	
    public Tasks(int id) {
        this.id = id;
    }
    public Tasks(int id, Projects projects, TypeTasks typeTasks, String content, Boolean achieved, String note, Long score, Boolean status, Date createdAt, Date updateAt) {
       this.id = id;
       this.projects = projects;
       this.typeTasks = typeTasks;
       this.content = content;
       this.achieved = achieved;
       this.note = note;
       this.score = score;
       this.status = status;
       this.createdAt = createdAt;
       this.updateAt = updateAt;
    }
   
     @Id 

    
    @Column(name="id", unique=true, nullable=false)
    public int getId() {
        return this.id;
    }
    
    public void setId(int id) {
        this.id = id;
    }

@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="project_id")
    public Projects getProjects() {
        return this.projects;
    }
    
    public void setProjects(Projects projects) {
        this.projects = projects;
    }

@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="type_task_id")
    public TypeTasks getTypeTasks() {
        return this.typeTasks;
    }
    
    public void setTypeTasks(TypeTasks typeTasks) {
        this.typeTasks = typeTasks;
    }

    
    @Column(name="content")
    public String getContent() {
        return this.content;
    }
    
    public void setContent(String content) {
        this.content = content;
    }

    
    @Column(name="achieved")
    public Boolean getAchieved() {
        return this.achieved;
    }
    
    public void setAchieved(Boolean achieved) {
        this.achieved = achieved;
    }

    
    @Column(name="note")
    public String getNote() {
        return this.note;
    }
    
    public void setNote(String note) {
        this.note = note;
    }

    
    @Column(name="score", precision=18, scale=0)
    public Long getScore() {
        return this.score;
    }
    
    public void setScore(Long score) {
        this.score = score;
    }

    
    @Column(name="status")
    public Boolean getStatus() {
        return this.status;
    }
    
    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="created_at", length=23)
    public Date getCreatedAt() {
        return this.createdAt;
    }
    
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="update_at", length=23)
    public Date getUpdateAt() {
        return this.updateAt;
    }
    
    public void setUpdateAt(Date updateAt) {
        this.updateAt = updateAt;
    }




}


