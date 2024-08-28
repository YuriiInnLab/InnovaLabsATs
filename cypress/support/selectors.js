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

    tm_package_base = 'div[color="black"]'
    tm_package_stand = 'div[color="#3498DB"]'
    tm_package_prem = 'div[color="black"]'

    tm_select_package = '.sc-llYSUQ' // changed from '.sc-hKwDye > .sc-egiyK > .sc-crHmcD'
    tm_rush_or_agreement = '.form-check-label'
    tm_summary = '.summary'
    tm_payment_but = '.pay'
    tm_payment_form = '.polaroid'

    //------Inc_States

    incs_logo = '.navbar-brand'
    incs_contactus_btn = '[href="/incorp-ui-v3/contact-us"]'
    incs_continue_btn = '.Button__StyledButton-sc-17bwchr-0'
    incs_state_select = '.base-select__control.css-13cymwt-control'
    incs_business_name = '.Body__StyledBody-sc-1y4b41i-0 > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incs_business_cat1 = '.Body__StyledBody-sc-1y4b41i-0 > .Select__StyledGroup-sc-1uvnxe6-0 > .Select__StyledSelectContainer-sc-1uvnxe6-1'
    incs_business_cat2 = '.Body__StyledBody-sc-1y4b41i-0 > :nth-child(2) > .Select__StyledGroup-sc-1uvnxe6-0 > .Select__StyledSelectContainer-sc-1uvnxe6-1'
    incs_agreement_checkbox = '.Checkbox__StyledLabel-sc-1dkn11-1'
    incs_street_address = ':nth-child(4) > .Body__StyledBody-sc-1y4b41i-0 > .row > :nth-child(1) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incs_city = ':nth-child(4) > .Body__StyledBody-sc-1y4b41i-0 > .row > :nth-child(3) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incs_zip = ':nth-child(5) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incs_manager = '.Body__StyledBody-sc-1y4b41i-0 > :nth-child(2) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incs_phone = ':nth-child(7) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incs_email = ':nth-child(6) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incs_primary_fname = ':nth-child(6) > .Body__StyledBody-sc-1y4b41i-0 > .row > :nth-child(1) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incs_primary_lname = ':nth-child(6) > .Body__StyledBody-sc-1y4b41i-0 > .row > :nth-child(3) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incs_statef_select = ':nth-child(4) > .Body__StyledBody-sc-1y4b41i-0 > .row > :nth-child(4) > .Select__StyledGroup-sc-1uvnxe6-0 > .Select__StyledSelectContainer-sc-1uvnxe6-1'
    incs_title = ':nth-child(5) > .Select__StyledGroup-sc-1uvnxe6-0 > .Select__StyledSelectContainer-sc-1uvnxe6-1'
    incs_proc_option = '.ProcessingRadioGroup__StyledCheckLabel-sc-1wnyfjb-3'
    incs_ra_chckbox = 'input[type="checkbox"].form-check-input'
    incs_pay_fname = ':nth-child(1) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incs_pay_lname = ':nth-child(2) > .BaseInput__StyledGroup-sc-1drn94o-0 > .BaseInput__StyledControl-sc-1drn94o-2'
    incs_pay_yr_Mth = '.Select__StyledSelectContainer-sc-1uvnxe6-1'
    incs_upsell_checkboxes = ' .Checkbox__StyledIconContainer-sc-1dkn11-2'
    incs_fupsell_prices = '.AdditionalDocumentsForm__StyledRow-sc-gqy2ca-1.fnTIrV.row >> .Text__StyledText-sc-400n51-0.cnCESj'
    incs_fupsell_sum = '.iHrVXw'
    incs_refuse_boiups = '.BOIForm__StyledLinkContainer-sc-fsxm4l-4 > .Text__StyledText-sc-400n51-0'
    

    //------EIN

    ein_products = '.taxid-product'
    ein_faq = '.faq-link'
    ein_multistep = '[style="display: table; width: 100%; margin: 0px auto;"] > :nth-child(3)'
    ein_agreement_chckbox = ':nth-child(27) > .form-group > .form-check'
    ein_submit_payment = '.btn'
    ein_processing_options = '.border-check > .form-group >'
    ein_confirm_llc = '.bcFqgn'
    ein_ra_chckbox = '.form-check-label'
    ein_upsell_decision_btns = '.StyledButton-sc-lt9en-0'
    ein_dateofbirth_selectors = '.Select__StyledControl-sc-dtgfpe-2'

    //------INC UI

    inc_logo = 'a > picture > img'
    inc_home_banner = '.HomeBannerSection__StyledBannerContainer-sc-1vqnhwi-1 > :nth-child(2)'
    inc_membership_button = '[style="display:flex;align-items:center"] > [href="https://dev.innova-labs.net/incorpified-membership"] > .Button__StyledButton-sc-e62m1c-0'
    inc_nav_menu = '.nav-menu > .Navbar__StyledNav-sc-pwq4xa-0 > .menus > '
    inc_llc_corp_button = ':nth-child(4) > .Button__StyledButton-sc-e62m1c-0'
    inc_start_reg_button = '.LLCProductBannerSection__StyledFormLLCContainer-sc-h7m1cy-7 > .Button__StyledButton-sc-e62m1c-0'
    inc_state_select = '.prime-select__indicators.css-1wy0on6'
    inc_states_options = '#react-select-2-listbox >>'
    inc_nav_buttons = '.gaXuZg > .row >> .Button__StyledButton-sc-e62m1c-0'
    inc_business_name = '.BaseInput__StyledControl-sc-12dsoi4-2'
    inc_select_universal = '.Select__StyledSelectContainer-sc-90p63h-1'
    inc_input_fields = '.BaseInput__StyledGroup-sc-12dsoi4-0 > .BaseInput__StyledControl-sc-12dsoi4-2'
    inc_details_questions = ' .Switch__StyledGroup-sc-132hhey-0 > .iFCKkX > .Switch__StyledCheckLabel-sc-132hhey-3'
    inc_packages = '.PackageRadioGroupDesktop__StyledColumn-sc-rdllgc-2'
    inc_packages_select = '.PackageRadioGroupDesktop__StyledButtonContainer-sc-rdllgc-12'
    inc_ra_confirmation = '.eTfozn > .row > .d-flex > .Button__StyledButton-sc-e62m1c-0'
    inc_order_summary = '.EtzRa > .OrderSummary__StyledContainer-sc-1j5iiw6-0'
    inc_agreement_checkbox = '.Checkbox__StyledLabel-sc-uziv3i-1.bfjQFG.form-label > >'
    inc_submit_order = '.d-flex > .Button__StyledButton-sc-e62m1c-0'

    //------CRM UI

    crm_dashboard_filters = '.form-control'
    crm_order_Vis_filters = '.md-2 > >.form-control-sm'
    crm_recurring_checkbox = '#includeRecurring'
    crm_filter_button = '.form-group > .btn'
    crm_nav_orders = ':nth-child(2) > .active'
    crm_nav_buttons = '.nav-link'
    crm_incS_orders = ':nth-child(5) > .nav-link'
    crm_order_search_options = '.ml-3 >'
    crm_order_select = '.table-bg-PendingRA > :nth-child(3)'
    crm_product_select = '.d-flex > .form-control'
    //Order parts
    crm_orderid = ':nth-child(2) > :nth-child(1) > .col-sm-9'
    crm_order_created = ':nth-child(2) > :nth-child(2) > .col-sm-9'
    crm_firstname = ':nth-child(2) > :nth-child(3) > .col-sm-9'
    crm_lastname = ':nth-child(2) > :nth-child(4) > .col-sm-9'
    crm_email = ':nth-child(2) > :nth-child(5) > .col-sm-9'
    crm_edit_btn = ':nth-child(1) > .mt-2 > .btn'
    crm_product_codes = ':nth-child(2) > :nth-child(6) > .col-sm-9'
    crm_save_ord_changes = '.btn-default'
    crm_order_products = '.col-sm-9 > p'

}   