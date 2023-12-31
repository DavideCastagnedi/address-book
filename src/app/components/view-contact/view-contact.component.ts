import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icontact } from 'src/app/models/icontact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
 public ContactId:string|null=null;
 public contact:Icontact={} as Icontact;
 public loading:boolean=false;
 public errorMessage:string='';


constructor(private activatedRoute:ActivatedRoute,
  private contactService:ContactService ){}


  ngOnInit(): void {
   
this.activatedRoute.paramMap.subscribe((param)=>
this.ContactId=param.get('contactId')
)
if(this.ContactId){
this.loading=true

    this.contactService.getContactById(this.ContactId).subscribe((data)=>{
      this.contact=data;
      
      this.loading=false;
    },(error)=>{
      this.errorMessage=error;
    })
  }

}
  

public isNotEmpty(){
  return Object.keys(this.contact).length>0;
}

}
