import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'vit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vitter-Folio';
  loading = false;
  assets = [];
  constructor(apollo: Apollo) {
    apollo.watchQuery<any>({
      query: gql`query test { assets {
        assetId
        name
        symbol
      } }`
    })
    .valueChanges
    .subscribe(({data, loading }) => {
      this.loading = loading;
      this.assets = data.assets;
    })
    /* apollo.query({query: gql`query test { assets {
      assetId
      name
      symbol
    } }`})
    .subscribe(
      console.log); */
  }

  alert() {
    alert('this is a test');
  }
}
