import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Board} from '../entities/Board';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  isLoading = false;

  constructor(private sanitizer: DomSanitizer) {
  }

  generateDownloadJsonUri(board: Board) {
    const theJSON = JSON.stringify(board);
    const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    return uri;
  }

  loadDataJson(file, board: Board) {
    const fileReader = new FileReader();
    this.isLoading = true;
    fileReader.onload = (e) => {
      Object.assign(board, JSON.parse(fileReader.result.toString()));
      this.isLoading = false;
    };
    fileReader.readAsText(file);
  }
}
