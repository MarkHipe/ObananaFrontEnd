import React from "react";
import styled from "styled-components";
import RelatedProducts from "./RelatedProducts";

const StorePolicies = () => {
  return (
    <Con>
      <div className="rulesCon">
        <h4>Refund Policy</h4>
        <h1>Refund Policy</h1>

        <h6>1. Application for Returns/Refunds</h6>
        <p>
          Subject to the terms and conditions in this Refunds and Return Policy
          and the Terms of Service, Buyer may apply for return of the purchased
          items (“Item”) and/or refund prior to the expiry of the Obanana
          Guarantee Period. Obanana Guarantee Period may be extended for a
          maximum period of three (3) days unless Obanana in its sole discretion
          determines that a longer extension is appropriate or required.
        </p>
        <p>
          Obanana Guarantee is a service provided by Obanana, at the User’s
          request, to assist Users in dealing with certain conflicts which may
          arise during the course of a transaction. Users may communicate with
          each other privately to resolve their differences or approach their
          relevant local authorities to assist them in overcoming any dispute
          prior, during, or after using Obanana Guarantee.
        </p>

        <h6>2. Application for the Return of an Item</h6>
        <p>
          Buyer may only apply for the refund and/or return of the Item in the
          following circumstances:
        </p>
        <ul>
          <li>The Item has not been received by the Buyer;</li>
          <li>The Item was defective and/or damaged on delivery;</li>
          <li>
            The seller has delivered an Item that does not match the agreed
            specification (e.g. wrong size, color, etc.) to the Buyer;
          </li>
          <li>
            The Item delivered to Buyer is materially different from the
            description provided by Seller in the listing of the Item; or
          </li>
          <li>
            By way of private agreement with Seller and Seller must send his/her
            confirmation to Obanana confirming such agreement.
          </li>
        </ul>
        <br />
        <p>The buyer’s application must be submitted via obanana.com.</p>
        <br />
        <p>ten (10) calendar days after the return request is raised.</p>
        <br />
        <p>
          In the event where the Buyer has commenced legal action against the
          Seller, the Buyer may provide the formal notification from the
          appropriate authority to request Obanana to continue to hold the
          purchase monies until a formal determination is available. Obanana
          will, at its sole and absolute discretion, determine whether it is
          necessary to continue to hold such purchase monies.
        </p>
        <h6>3. Return and Return/Refund Policy</h6>
        <p>
          When Obanana receives an application from Buyer for the return of the
          Item and/or refund, Obanana will notify Seller in writing
          (Email/Chat). Seller may respond to Buyer’s application according to
          the steps provided by Obanana in the written notification. The seller
          must respond within the time frame stipulated in the written
          notification (the “Stipulated Period”). Should Obanana not hear from
          Seller within the Stipulated Period, Obanana will assume that Seller
          has no response to Buyer’s application and will proceed to assess
          Buyer’s application without further notice to Seller. Obanana will
          review each Seller’s response on a case-by-case basis and, in its sole
          discretion, determine whether Buyer’s application may be successful
          against the circumstances stated by Seller.
        </p>
        <h6>4. Condition of Returning Item</h6>
        <p>
          To enjoy a hassle-free experience when returning the Item, Buyer
          should ensure that the Item, including any complimentary items such as
          accessories that come with the Item, must be returned to Seller in the
          condition received by Buyer on delivery. We will recommend Buyer take
          a photo of the Item upon receipt.
        </p>
        <h6>5. Liability of Product Return Shipping Fee</h6>
        <p>
          i) In the scenario of an unforeseen error from the seller’s end (i.e –
          damaged, faulty or wrong product delivered to the buyer), the seller
          will bear the buyer’s return shipping fee.
        </p>
        <p>
          ii) In the scenario of the buyer’s change of mind, the buyer shall get
          the seller’s consent prior to the return request and the buyer will
          bear the return shipping fee.
        </p>
        <p>
          iii) In the scenario where both seller-buyer disputing the party
          liable for the return shipping fee, Obanana at its sole discretion
          will determine the party liable for the return shipping fee.
        </p>
        <h6>6. Refunds</h6>
        <p>
          The buyer will only be refunded after Obanana has received the
          confirmation from the Seller that the Seller has received the returned
          item. In the event where Obanana does not hear from Seller within a
          specified time, Obanana will be at liberty to refund the applicable
          sum to Buyer without further notice to Seller.
        </p>
        <h6>7. Communication Between Buyer and Seller</h6>
        <p>
          Obanana encourages Users to communicate with each other in the event
          where a problem arises in a transaction. As Obanana is a platform for
          Users to conduct trading, the Buyer should contact the Seller directly
          for any issue relating to the Item purchased.
        </p>
        <br />
        <p>Last Update: November 24, 2021</p>
      </div>
      <RelatedProducts />
    </Con>
  );
};
const Con = styled.div`
color: #666666;
width: 95%;
margin: auto;
h6, p{
  font-size: 13px;
}
h6{

}
& ul{
  & li{
  font-size: 13px;

  }
}

`;

export default StorePolicies;
