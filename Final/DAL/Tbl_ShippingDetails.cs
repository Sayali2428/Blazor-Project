//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Final.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Tbl_ShippingDetails
    {
        public int ShippingDetailId { get; set; }
        public Nullable<int> MemberId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public Nullable<int> OrderId { get; set; }
        public Nullable<decimal> AmountPaid { get; set; }
        public string PaymentType { get; set; }
    
        public virtual Tbl_Member Tbl_Member { get; set; }
    }
}
