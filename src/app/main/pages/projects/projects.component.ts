import { Component, OnInit } from '@angular/core';
import { PageType } from 'src/app/core/models/page-type.model';
import { Project } from 'src/app/core/models/project.model';
import { PageDirective } from '../../components/page.directive';

const BLOB1 = {
  blob: 'blob-1',
  style: 'blob up right',
  size: {
    width: 648,
    height: 648,
  },
};

const BLOB2 = {
  blob: 'blob-2',
  style: 'blob down left',
  size: {
    width: 649,
    height: 648,
  },
};

const BLOB3 = {
  blob: 'blob-3',
  style: 'blob up left',
  size: {
    width: 648,
    height: 687,
  },
};

const BLOB4 = {
  blob: 'blob-4',
  style: 'blob down right',
  size: {
    width: 648,
    height: 648,
  },
};

const BLOB5 = {
  blob: 'blob-5',
  style: 'blob up right',
  size: {
    width: 648,
    height: 648,
  },
};

const BLOB6 = {
  blob: 'blob-6',
  style: 'blob down left',
  size: {
    width: 648,
    height: 721,
  },
};

const BLOBS: { [key: string]: any } = {
  blob1: BLOB1,
  blob2: BLOB2,
  blob3: BLOB3,
  blob4: BLOB4,
  blob5: BLOB5,
  blob6: BLOB6,
};


@Component({
  selector: 'ktbz-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  pageType: PageType = PageType.PROJECTS;
  prefix = 'projects';

  projects: Project[] = [
    {
      name: 'tuziemiec.name',
      type: 'tuziemiec.type',
      description: 'tuziemiec.description',
      url: 'Tuziemiec',
      photoUrl: 'tuziemiec.photoUrl',
      technologies: [
        'technologies.angular',
        'technologies.java',
        'technologies.mysql',
        'technologies.docker',
      ]
    },
    {
      name: 'walker.name',
      type: 'walker.type',
      description: 'walker.description',
      url: 'Walker',
      photoUrl: 'walker.photoUrl',
      technologies: [
        'technologies.angular',
        'technologies.java',
        'technologies.mongodb',
      ]
    },
    {
      name: 'anytravel.name',
      type: 'anytravel.type',
      description: 'anytravel.description',
      url: 'AnyTravel',
      photoUrl: 'anytravel.photoUrl',
      technologies: [
        'technologies.angular',
        'technologies.nodejs',
        'technologies.mongodb',
        'technologies.docker',
      ]
    },
  ];


  background: string = '';

  blobs: any[] = [];



  constructor() {
  }

  ngOnInit() {
    this.initPage(this.pageType);
  }

  initPage(pageType: PageType) {
    const background = 'bg-dark';
    const blobNames = ['blob5', 'blob6'];

    this.setBackground(background);
    this.setBlobs(blobNames);
  }

  private setBackground(background: string) {
    this.background = background;
  }

  private setBlobs(blobNames: string[]) {
    this.blobs = blobNames.map((name) => BLOBS[name]);
    console.log(this.blobs);
  }

}
