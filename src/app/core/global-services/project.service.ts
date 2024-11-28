import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/features/home/interfaces/iproject.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly apiUrl: string = 'http://localhost:3000/projects'

  constructor(private readonly http: HttpClient) { }

  getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.apiUrl}`)
  }

  getProjectById(id: string): Observable<IProject> {
    return this.http.get<IProject>(`${this.apiUrl}/${id}`);
  }

  addProject(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(this.apiUrl, project);
  }

  updateProject(project: IProject): Observable<IProject> {
    return this.http.put<IProject>(`${this.apiUrl}/${project.id}`, project);
  }

  deleteProject(id: string): Observable<IProject> {
    return this.http.delete<IProject>(`${this.apiUrl}/${id}`);
  }
}
