namespace Hogwarts.Models
{
  public class CourseTeacher
  {
    public int CourseTeacherId {get;set;}
    public int TeacherId {get;set;}
    public int CourseId {get;set;}
    
    public virtual Teacher Teacher {get;set;}
    public virtual Course Course {get;set;}
  }
}