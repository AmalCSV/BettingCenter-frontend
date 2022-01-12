import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-betting-loader',
  templateUrl: './betting-loader.component.html',
  styleUrls: ['./betting-loader.component.scss']
})
export class BettingLoaderComponent implements OnInit {

  public loading: boolean;

  constructor(private loaderService: LoaderService) { 

    this.loaderService.isLoading.subscribe((v) => {
      console.log(v, "BettingLoaderComponent");
      this.loading = v;
    });

  }

  ngOnInit(): void {
  }

}
