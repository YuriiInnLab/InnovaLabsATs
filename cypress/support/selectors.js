/// <reference types="cypress" />

export class PageElements {

    //------- Trademarks

    tm_home_logo = 'div.logo'
    tm_search_field = 'input'
    tm_search_btn = '[style="cursor:pointer"]'
    tm_multistep1 = ':nth-child(1) > .MuiStepLabel-root'
    tm_multistep5 = ':nth-child(5) > .MuiStepLabel-root'
    tm_top_logo = 'a > img'
    tm_register_btn = '[style="cursor:pointer;max-width:fit-content;margin-top:1em"]'
    tm_continue_btn = '.css-9pu3pk'
    tm_pack_description = 'div.left-side'
    tm_class_select = '.async-select__value-container'
    tm_new_class_btn = '#TrademarkForm > .MuiButton-root'
    tm_package1 = ':nth-child(1) > .sc-bkkeKt'
    tm_package2 = ':nth-child(2) > .sc-bkkeKt'
    tm_package3 = ':nth-child(3) > .sc-bkkeKt'
    tm_pack2_select = ':nth-child(2) > .sc-bkkeKt > .sc-iJKOTD > .sc-llYSUQ'
    tm_rush_or_agreement = '.form-check-label'
    tm_summary = '.summary'
    tm_payment_but = '.pay'
    tm_payment_form = '.polaroid'

    //------Inc_States

    incS_logo = '.navbar-brand'
    incS_contactus_btn = '[href="/incorp-ui-v3/contact-us"]'
    incS_Continue_btn = '.Button__StyledButton-sc-17bwchr-0'
    incS_State_Select = '.base-select__control.css-13cymwt-control'
    incS_Business_Name = '.Body__StyledBody-sc-1y4b41i-0 > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incS_Business_Cat1 = '.Body__StyledBody-sc-1y4b41i-0 > .Select__StyledGroup-sc-1uvnxe6-0 > .Select__StyledSelectContainer-sc-1uvnxe6-1'
    incS_Business_Cat2 = '.Body__StyledBody-sc-1y4b41i-0 > :nth-child(2) > .Select__StyledGroup-sc-1uvnxe6-0 > .Select__StyledSelectContainer-sc-1uvnxe6-1'
    incS_Agreement_Checkbox = '.Checkbox__StyledLabel-sc-1dkn11-1'
    incS_Street_Address = ':nth-child(4) > .Body__StyledBody-sc-1y4b41i-0 > .row > :nth-child(1) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incS_City = ':nth-child(4) > .Body__StyledBody-sc-1y4b41i-0 > .row > :nth-child(3) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incS_Zip = ':nth-child(5) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incS_Manager = '.Body__StyledBody-sc-1y4b41i-0 > :nth-child(2) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incS_Phone = ':nth-child(7) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incS_eMail = ':nth-child(6) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incS_Primary_FName = ':nth-child(6) > .Body__StyledBody-sc-1y4b41i-0 > .row > :nth-child(1) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incS_Primary_LName = ':nth-child(6) > .Body__StyledBody-sc-1y4b41i-0 > .row > :nth-child(3) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incS_Statef_Select = ':nth-child(4) > .Body__StyledBody-sc-1y4b41i-0 > .row > :nth-child(4) > .Select__StyledGroup-sc-1uvnxe6-0 > .Select__StyledSelectContainer-sc-1uvnxe6-1'
    incS_Title = ':nth-child(5) > .Select__StyledGroup-sc-1uvnxe6-0 > .Select__StyledSelectContainer-sc-1uvnxe6-1'
    incS_Proc_Option = '.ProcessingRadioGroup__StyledCheckLabel-sc-1wnyfjb-3'
    incS_RA_Chckbox = 'input[type="checkbox"].form-check-input'
    incS_Pay_FName = ':nth-child(1) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incS_Pay_LName = ':nth-child(2) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incS_Pay_Yr_Mth = '.Select__StyledSelectContainer-sc-1uvnxe6-1'
    incS_Upsell_Checkboxes = ' .Checkbox__StyledIconContainer-sc-1dkn11-2'
    incS_FUpsell_Sum = '.iHrVXw'
    incS_Refuse_BOIUps = '.BOIForm__StyledLinkContainer-sc-fsxm4l-4 > .Text__StyledText-sc-400n51-0'
    

    //------EIN

    ein_Products = '.taxid-product'
    ein_Faq = '.faq-link'
    ein_Multistep = '[style="display: table; width: 100%; margin: 0px auto;"] > :nth-child(3)'
    ein_Agreement_Chckbox = ':nth-child(27) > .form-group > .form-check'
    ein_Submit_Payment = '.btn'
    ein_Processing_options = '.border-check > .form-group >'
    ein_Confirm_LLC = '.bcFqgn'
    ein_RA_chckbox = '.form-check-label'
    ein_Upsell_Decision_Btns = '.StyledButton-sc-lt9en-0'
    ein_DateOfBirth_Selectors = '.Select__StyledControl-sc-dtgfpe-2'

    //------CRM UI

    crm_Dashboard_Filters = '.form-control'
    crm_Order_Vis_Filters = '.md-2 > >.form-control-sm'
    crm_Recurring_Checkbox = '#includeRecurring'
    crm_Filter_Button = '.form-group > .btn'
    crm_Nav_Orders = ':nth-child(2) > .active'
    crm_Nav_Buttons = '.nav-link'
    crm_IncS_Orders = ':nth-child(5) > .nav-link'
    crm_Order_Search_Options = '.ml-3 >'
    crm_Order_Select = '.table-bg-PendingRA > :nth-child(3)'
    crm_Product_Select = '.d-flex > .form-control'
    //Order parts
    crm_OrderID = ':nth-child(2) > :nth-child(1) > .col-sm-9'
    crm_OrderCreated = ':nth-child(2) > :nth-child(2) > .col-sm-9'
    crm_FirstName = ':nth-child(2) > :nth-child(3) > .col-sm-9'
    crm_LastName = ':nth-child(2) > :nth-child(4) > .col-sm-9'
    crm_Email = ':nth-child(2) > :nth-child(5) > .col-sm-9'
    crm_Edit_Btn = ':nth-child(1) > .mt-2 > .btn'
    crm_Product_Codes = ':nth-child(2) > :nth-child(6) > .col-sm-9'
    crm_Save_Ord_Changes = '.btn-default'
    crm_Order_Products = '.col-sm-9 > p'

}   