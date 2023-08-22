import { Component } from '@angular/core';
import { article } from 'src/app/model/models';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';

@Component({
  selector: 'app-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.scss'],
})
export class ArticlesFormComponent {
  addArticelModaTitle: string = 'Adicione um novo Artigo';
  editArticleModalTitle: string = 'Edite o seu Artigo';
  openCreateArticleModal: boolean = false;
  openEditArticleModal: boolean = false;
  articlesList: article[];
  editableObj: article;
  constructor(private newApi: ApiRealtimeDatabaseService) {}

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles() {
    this.newApi.getData('articles').subscribe((data: article[]) => {
      this.articlesList = data;
    });
  }
  deleteArticle(data: string) {
    this.newApi.deleteImage('articles', data).subscribe((res) => {
      this.fetchArticles();
    });
  }

  editArticle(obj: article) {
    this.toggleCreateEditForm('edit');
    this.editableObj = obj;
  }

  toggleCreateEditForm(typeForm: string) {
    if (typeForm === 'add') {
      this.openCreateArticleModal = !this.openCreateArticleModal;
      if (this.openCreateArticleModal) {
        this.openEditArticleModal = false;
      }
    } else if (typeForm === 'edit') {
      this.openEditArticleModal = !this.openEditArticleModal;
      if (this.openEditArticleModal) {
        this.openCreateArticleModal = false;
      }
    }
  }
}
