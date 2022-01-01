import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Comments } from './comments';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() id!: number;
  comments$!: Observable<Comments>;
  commentForm: FormGroup = this.formBuilder.group({
    comment: ['', Validators.maxLength(300)],
  });

  constructor(
    private commentService: CommentsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.commentService.searchComment(this.id);
  }

  save(): void {
    const comment = this.commentForm.get('comment')?.value ?? '';
    this.comments$ = this.commentService.addComment(this.id, comment).pipe(
      switchMap(() => this.commentService.searchComment(this.id)),
      tap(() => {
        this.commentForm.reset();
        alert('Salvo Comentário');
      })
    );
  }
}
