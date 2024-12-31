import {
  Container,
  H2,
  H3,
  Left,
  ListItems,
  Right,
  Text,
  List,
  Strong,
  H4,
} from "../../styles/terms/Style.js";
import { Button } from "../../styles/common/styles.js";

function Terms({ theme }) {
  return (
    <>
      <Container theme={theme}>
        <Left theme={theme}>
          <H2 theme={theme}>Terms of Service</H2>
          <Strong theme={theme}>
            The Tourism Act No. 29 of 2008 of Tanzania includes an arbitration
            agreement and class action waiver applicable to all claims brought
            against PipitSafaris Tanzania. Please read them carefully.
          </Strong>
          <Text theme={theme}>
            These Terms of Service ("Terms") form a binding agreement between
            you and PipitSafaris Tanzania ("PipitSafaris"). They govern your use
            of the PipitSafaris Platform, including the website, applications,
            and services.
          </Text>
          <Text theme={theme}>
            PipitSafaris Tanzania offers a platform for Members to publish,
            offer, search for, and book services. Tour Operators publish and
            offer services; Guests search and book services. PipitSafaris is not
            the owner or manager of Listings or services and is not a party to
            contracts between Guests and Tour Operators, nor is it an agent,
            except as outlined in the Payment Terms.
          </Text>
          <Text theme={theme}>
            We maintain supplementary policies such as the Privacy Policy and
            Booking Terms that govern payment services provided by PipitSafaris
            Tanzania.
          </Text>
          <H2 theme={theme}>1. Our Mission.</H2>
          <Text theme={theme}>
            Our Mission is to deliver personalized safari experiences while
            promoting conservation and supporting local communities.
          </Text>
          {/*<h2 theme={theme}>Client Terms</h2>*/}
          <H3 theme={theme}>
            2. Searching, Booking and Cancellations on PipitSafaris.
          </H3>
          <Text theme={theme}>
            Searching & Booking: You can search for Safari Services based on
            destination, accommodation type, dates, etc. Once you book, you
            agree to pay the total price, which includes the service price,
            fees, taxes, and other applicable charges.
          </Text>
          <Text theme={theme}>
            Deposit: A 30% deposit is required, excluding air travel and
            non-refundable permits. An additional deposit may apply during peak
            periods. This deposit covers PipitSafaris Tanzania's costs and may
            be forfeited in case of cancellation.
          </Text>
          <Text theme={theme}>
            Payment: The final balance is due three months before departure.
            Full payment is required for bookings made within three months of
            travel.
          </Text>
          <Text theme={theme}>
            Modifications: Modifications to bookings are subject to supplier
            fees and other charges incurred by PipitSafaris Tanzania.
          </Text>
          <Text theme={theme}>
            Cancellation & Refunds: If you cancel, refunds are based on the
            cancellation policy of the Tour Operator. If PipitSafaris Tanzania
            or the Tour Operator cancels, you may be eligible for a full or
            partial refund depending on the situation.
          </Text>
          {/*<Text theme={theme}>
            You must make all payments in full and on time. Failure to make a
            payment may result in the cancellation of your travel and the
            forfeiture of your Deposit and any Additional Deposit. In such a
            case this would be considered a cancellation by you and the
            cancellation terms and fees as described below would be in effect.
            We reserve the right to refuse service to anyone. In such case, a
            full refund would be provided, and we would have no further
            liability to you.
          </Text>
          <Text theme={theme}>
            Your final balance will be due in full three calendar months prior
            to departure. Trips booked within three months of travel require
            full payment at the time of booking.
          </Text>
          <Text theme={theme}>
            Payments can be made by bank transfer or by credit or debit card.
            While we do accept major credit cards including Visa, Mastercard and
            American Express, travelers must provide to us a click or signed
            authorization for every transaction for your trip. Your
            authorization is an agreement for us to charge your card and an
            acknowledgement and agreement to the Company Terms and Conditions
            and the Supplier Terms and Conditions including the cancellation
            terms. It is your responsibility to read and understand these rules,
            standards, policies, and requirements prior to booking a Listing. Be
            aware that some Tour Operators work with a Co-Tour Operators (other
            Operators) or as part of a team to provide their Tour Operator
            Services.
          </Text>
          <Text theme={theme}>
            It is important for you to check the details on the Confirmation
            Invoice as soon as you get it. In the event of any discrepancy,
            please contact us immediately at hello@pipitsafaris.com.
            PipitSafaris will be responsible for making payments to Third Party
            Suppliers on confirmed bookings by you on your behalf and remitting
            the booking fee element to the Company.
          </Text>
          <H4 fontSize="15px" theme={theme}>
            <Strong theme={theme}>2.2.2 Accommodation Reservations</Strong>
          </H4>
          <Text theme={theme}>
            An Accommodation Reservation is a limited license to enter, occupy,
            and use the Accommodation. The Accommodation staff retain the right
            to re-enter the Accommodation during your stay, to the extent: (i)
            it is reasonably necessary, (ii) permitted by your contract with the
            Accommodation, and (iii) consistent with applicable law. If you stay
            past checkout, the Accommodation has the right to make you leave in
            a manner consistent with applicable law, including by imposing
            reasonable overstay penalties. You may not exceed the maximum number
            of allowed Guests. Accommodation Reservations also extend to the
            hotels, lodges, camps, tented lodges and other housing.
          </Text>
          <H4 fontSize="15px" theme={theme}>
            <Strong theme={theme}>
              2.2.3 Reservations for Experiences and Other Tour Operator
              Services
            </Strong>
          </H4>
          <Text theme={theme}>
            An Experience or other Tour Operator Service Reservation entitles
            you to participate in, attend, or use that Tour Operator Service.
            You are responsible for confirming that you, and anyone you invite,
            meet minimum age, proficiency, fitness, or other requirements. You
            are responsible for informing the Tour Operator of any medical or
            physical conditions, or other circumstances that may impact your
            ability to participate, attend, or use the Tour Operator Service.
            Except where expressly authorized, you may not allow any person to
            join a Tour Operator Service unless they are included as an
            additional guest during the booking process.
          </Text>
          <H4 fontSize="15px" theme={theme}>
            <Strong theme={theme}>
              2.2.4 Booking Modifications & Amendments.
            </Strong>
          </H4>
          <Text theme={theme}>
            The Company will make every effort to assist you if you wish to
            alter your arrangements. Guests and Tour Operators are responsible
            for any booking modifications they agree to make via the
            PipitSafaris Platform or by directing PipitSafaris customer service
            to make on their behalf ("Booking Modifications"). If it is possible
            to make the amendment, it will be subject to any fees charged by our
            suppliers, along with all communication charges or other expenses
            incurred by the Company as a result of the change.
          </Text>
          <H4 fontSize="15px" theme={theme}>
            <Strong theme={theme}>2.3 Cancellations</Strong>
          </H4>
          <H4 fontSize="15px" theme={theme}>
            <Strong theme={theme}>2.3.1 Travel Issues, and Refunds</Strong>
          </H4>
          <Text theme={theme}>
            In general, if as a Guest you cancel a Reservation, the amount
            refunded to you is determined by the cancellation policy (as
            determined by PipitSafaris and the Tour Operator) that applies to
            that Reservation. However, in certain situations, other policies
            take precedence and determine what amount is refunded to you. If the
            Tour Operator cancels, or you experience a Travel Issue (as defined
            in our Guest Refund Policy), you may be eligible for rebooking
            assistance or a partial or full refund, depending on the
            circumstances as evaluated by PipitSafaris.
          </Text>
          <Text theme={theme}>
            All cancellations are subject to the Supplier Terms and Conditions
            of the Third Party Suppliers. Some Third Party Suppliers may choose
            to offer future travel credits in lieu of a cash refund. We,
            PipitSafaris, are not liable for a Third Party Supplier’s failure to
            provide a refund or for Third Party Supplier insolvency or
            bankruptcy.
          </Text>*/}
          <H3 theme={theme}>
            3. Your Responsibilities and Assumption of Risk.
          </H3>
          <Text theme={theme}>
            You are responsible for your actions and those of anyone you bring
            to any service. This includes leaving accommodations in good
            condition and covering any damage caused. You are also responsible
            for ensuring the safety and supervision of minors you bring along.
          </Text>
          {/* <Text theme={theme}>
            You are responsible and liable for your own acts and omissions and
            are also responsible for the acts and omissions of anyone you invite
            to join or provide access to any Accommodation, Experience,
            Transportation, or other Tour Operator Service. For example, this
            means: (i) you are responsible for leaving an Accommodation (and
            related personal property) in the condition it was in when you
            arrived, (ii) you are responsible for paying all reasonable Damage
            Claim amounts necessary to cover damage that you, your guest(s), or
            your pet(s) cause to an Accommodation, and (iii) you must act with
            integrity, treat others with respect, and comply with applicable
            laws at all times. If you are booking for an additional guest who is
            a minor or if you bring a minor to an Accommodation, Tour Operator,
            or Transportation Partner, you must be legally authorized to act on
            behalf of the minor and you are solely responsible for the
            supervision of that minor.
          </Text>
          <Text theme={theme}>
            You are responsible and liable for your own acts and omissions and
            are also responsible for the acts and omissions of anyone you invite
            to join or provide access to any Accommodation, Experience,
            Transportation, or other Tour Operator Service. For example, this
            means: (i) you are responsible for leaving an Accommodation (and
            related personal property) in the condition it was in when you
            arrived, (ii) you are responsible for paying all reasonable Damage
            Claim amounts necessary to cover damage that you, your guest(s), or
            your pet(s) cause to an Accommodation, and (iii) you must act with
            integrity, treat others with respect, and comply with applicable
            laws at all times. If you are booking for an additional guest who is
            a minor or if you bring a minor to an Accommodation, Tour Operator,
            or Transportation Partner, you must be legally authorized to act on
            behalf of the minor and you are solely responsible for the
            supervision of that minor.
          </Text>*/}

          <List theme={theme}>
            <ListItems theme={theme}>Entire Agreement.</ListItems>
            <ListItems theme={theme}>
              The Terms (including all communications, bookings, indemnities,
              and Privacy Policy) represent the full agreement between you and
              PipitSafaris Tanzania. No other terms apply unless explicitly
              stated. PipitSafaris Tanzania reserves the right to update these
              Terms periodically, with revisions posted on the website.
            </ListItems>
            {/*} <ListItems theme={theme}>
              Company (referred to as either "the Company", "We", "Us" or "Our"
              in this Agreement) refers to CloudSafari Inc., 651 N Broad St,
              Suite 201, Middletown, DE 19709.
            </ListItems>
            <ListItems theme={theme}>
              Cookies are small files that are placed on Your computer, mobile
              device or any other device by a website, containing the details of
              Your browsing history on that website among its many uses.
            </ListItems>
            {/*<ListItems theme={theme}>
              Country refers to: Delaware, United States
            </ListItems>*/}
            <ListItems theme={theme}>
              Device means any device that can access the Service such as a
              computer, a cellphone or a digital tablet.
            </ListItems>
            <ListItems theme={theme}>Governing Law</ListItems>

            <ListItems theme={theme}>
              These Terms shall be governed by and construed in accordance with
              the Tourism Act No. 29 of 2008 of Tanzania. Any disputes arising
              out of or in connection with these Terms shall be subject to the
              exclusive jurisdiction of the courts of Tanzania.
            </ListItems>
          </List>
          {/* <H3 theme={theme}>The Entire Contact</H3>
          <Text theme={theme}>
            The Conditions (along with all inquiries, advice, quotations,
            estimates provided to or by the Company, bookings made, indemnities
            signed, and the Company's Privacy Policy) collectively represent the
            full terms of the relationship between the parties. No other terms,
            conditions, warranties, representations, guarantees, promises, or
            inducements of any kind govern the relationship, and the Client
            acknowledges that they have not relied on any statements or
            representations made by the Company or others that are not expressly
            included here. The contra proferentem rule will not apply to the
            interpretation of these Conditions. The Company reserves the right
            to amend these conditions periodically, with each revision being
            dated and posted on its website.
          </Text>*/}
        </Left>

        <Right theme={theme}>
          <Strong theme={theme}>Still have questions for us?</Strong>
          <Text theme={theme}>
            Our team has answers and would love to help.
          </Text>
          <Button variant="primary">
            Contact Us
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-right"
              className="svg-inline--fa fa-chevron-right Text-sm"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              ></path>
            </svg>
          </Button>
          <H3 style={{ paddingTop: "16px" }} theme={theme}>
            Corporations Tanzania
          </H3>
          {/* <Text theme={theme}>
            TICO Registration #: 50027812 (Retail), 50027813 (Wholesale)
            <br></br>
            Corporation Name: CloudSafari, Inc.<br></br>
            Operating Name: CloudSafaris Canada<br></br>
            Address: 4230 Sherwoodtowne Blvd, Mississauga, ON L4Z 2G6<br></br>
            Phone: +1 888 859 0890 <br></br>
            Email: <u style={{ fontWeight: "500" }}>hello@cloudsafaris.com</u>
          </Text>*/}
        </Right>
      </Container>
    </>
  );
}

export default Terms;
