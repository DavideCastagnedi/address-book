import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Icontact } from 'src/app/models/icontact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  public contactId: string | null = null;
  public contact: Icontact = {} as Icontact;
  contactForm !:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactservice: ContactService,
    private activateroute: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      id: [''],
      name: [''],
      surname:[''],
      email: [''],
      mobile: ['']
    
    });

    this.activateroute.paramMap.subscribe((param) => {
      this.contactId = param.get('contactId');
    });
    if (this.contactId) {
      this.contactservice.getContactById(this.contactId).subscribe((data) => {
        this.contact = data;
       this.contactForm?.patchValue(this.contact);
      });
    } 
   
  }

  onSubmit(): void {
    if(this.contactId){
      console.log(this.contact)
   this.contactservice.updateContact(this.contactId,this.contactForm.value).subscribe((data)=>{
    console.log(this.contact);
    
    this.router.navigate(['/']).then()
    window.alert("Ur data updated");

   })
    }
  }
}
