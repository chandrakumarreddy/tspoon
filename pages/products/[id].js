import React from "react";

class Pdp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewDesc: false, viewShipping: false };
  }

  handleDescChange = () => this.setState({ viewDesc: !this.state.viewDesc });

  handleShippingChange = () =>
    this.setState({ viewShipping: !this.state.viewShipping });

  render() {
    return (
      <>
        <div className="imgPdpView">
          <img
            src="https://www.pngitem.com/pimgs/m/125-1259439_transparent-curry-leaves-png-png-download.png"
            className="imgPdp"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div className="mblViewCn">
          <div className="mbPdpView">
            <div className="pdpTitle">Basil</div>
            <span className="pdp__spec">
              Harvest 2015 | <span itemProp="availability">In Stock</span> |
              bunch
            </span>
            <span className="pdp_price">₹ 100</span>
            <div className="pdp__desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </div>
            <div className="btn_pdp--underlines-container">
              <input
                className="btn_pdp--underlines"
                type="submit"
                value="Add to bag"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                width="61"
                height="12"
                viewBox="0 0 61 12"
              >
                <path
                  d="M60.217,1.433 C45.717,2.825 31.217,4.217 16.717,5.609 C13.227,5.944 8.806,6.200 6.390,5.310 C7.803,4.196 11.676,3.654 15.204,3.216 C28.324,1.587 42.033,-0.069 56.184,0.335 C58.234,0.394 60.964,0.830 60.217,1.433 ZM50.155,5.670 C52.205,5.728 54.936,6.165 54.188,6.767 C39.688,8.160 25.188,9.552 10.688,10.943 C7.198,11.278 2.778,11.535 0.362,10.645 C1.774,9.531 5.647,8.988 9.175,8.551 C22.295,6.922 36.005,5.265 50.155,5.670 Z"
                  className="cls-1"
                ></path>
              </svg>
            </div>
          </div>
          <hr />
          <div className="expandPanel">
            <div className="pdpExpandPanel" onClick={this.handleDescChange}>
              <span>
                {!this.state.viewDesc ? (
                  <svg className="plusSvgIcon" viewBox="0 0 20 20">
                    <path d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
                  </svg>
                ) : (
                  <svg className="plusSvgIcon" viewBox="0 0 20 20">
                    <path d="M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z"></path>
                  </svg>
                )}
              </span>
              <span>Description</span>
            </div>
            {this.state.viewDesc && (
              <div className="pdpDescDetail">
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters. On the other hand, we denounce
                  with righteous indignation and dislike men who are so beguiled
                  and demoralized by the charms of pleasure of the moment, so
                  blinded by desire.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop demo-elessipublishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
              </div>
            )}
          </div>
          <div className="expandPanel">
            <div className="pdpExpandPanel" onClick={this.handleShippingChange}>
              <span>
                {!this.state.viewShipping ? (
                  <svg className="plusSvgIcon" viewBox="0 0 20 20">
                    <path d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
                  </svg>
                ) : (
                  <svg className="plusSvgIcon" viewBox="0 0 20 20">
                    <path d="M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z"></path>
                  </svg>
                )}
              </span>
              <span>Shipping</span>
            </div>
            {this.state.viewShipping && (
              <div className="pdpDescDetail">
                <p>No detail</p>
              </div>
            )}
          </div>
          <style css>{`
          .imgPdp {
            width: 250px;
            height: 250px;
            padding: 10px;
          }

          .imgPdpView {
            text-align: center;
          }

          /* ===Add to Bag start=== */

          input[type="submit"] {
            -webkit-appearance: button;
            cursor: pointer;
            border: none;
            background: none;
            font-size: 16px;
          }

          .btn_pdp--underlines {
            padding-top: 20px;
            display: inline-block;
            color: #f06060;
            transition: all 300ms ease-in-out;
          }

          .btn_pdp--underlines-container {
            text-align: center;
          }

          .btn_pdp--underlines-container svg {
            display: block;
            margin: 0 auto;
          }

          .btn_pdp--underlines-container .btn_pdp--underlines + svg path {
            fill: #f06060;
          }

          /* ===Add to Bag end=== */

          .pdpTitle {
            font-size: 30px;
            font-weight: 800;
          }

          .pdp__spec {
            display: block;
            font-size: 14px;
            color: #adaaaa;
            margin-bottom: 16px;
          }

          .pdp_price {
            color: #555555;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.5;
          }

          .pdp__desc {
            padding: 12px 0;
            line-height: 30px;
            text-align: center;
            font-size: 16px;
            color: #342f2f;
          }

          .btn--submit {
            opacity: 0;
            visibility: hidden;
            transform: translateY(50%);
            transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out,
              transform 300ms ease-in-out;
            z-index: 5;
          }

          .btn--circle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }

          .btn--default {
            font-size: 20px;
            text-align: center;
            color: #fff;
            background-color: #f06060;
            display: inline-block;
            position: absolute;
            overflow: hidden;
            transition: all 300ms ease-in-out;
            bottom: 10%;
            border-color: transparent;
            left: 40%;
          }

          .mblViewCn {
            display: none;
          }

          @media only screen and (max-width: 600px) {
            .mblViewCn {
              display: block;
              padding: 10px 16px;
            }

            .mbPdpView {
              position: relative;
              display: inline-block;
              width: 100%;
              margin-bottom: 20px;
            }

            .imgPdp {
              width: 250px;
              height: 250px;
            }

            .btn--submit {
              opacity: 1;
              visibility: visible;
              transform: translateY(0%);
            }
          }

          .expandPanel {
            margin-bottom: 10px;
          }

          .pdpExpandPanel {
            text-transform: uppercase;
            color: #555;
            font-weight: 700;
            padding: 15px 15px 15px 20px;
            border: 1px solid #ececec;
          }

          .plusSvgIcon {
            width: 14px;
            margin-right: 15px;
          }

          .pdpDescDetail {
            border: 1px solid #ececec;
            font-size: 14.5px;
            color: #555;
            padding: 0 10px;
          }

          `}</style>
        </div>
      </>
    );
  }
}

export default Pdp;
