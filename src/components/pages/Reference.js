import axios from "axios";
import React from "react";
import Loading from "../basics/Loading";
import Header from "../Header";
import Layout from "../Layout";
import Footer from "../Footer";
import WrapTitle from "../basics/WrapTitle";
import { Link } from "react-router-dom";
import ReferInfo from "../basics/ReferInfo";

// function ReferText({alpha, attr, desc}) {
//     return (
//         <li>
//             <Link to="/">
//                 <span className="alpha">{alpha}</span>
//                 <span className="attr">{attr}</span>
//                 <span className="desc">{desc}</span>
//             </Link>
//         </li>
//     );
// }

// const referAttr = [
//     {
//         alpha: "A",
//         attr: "align-content",
//         desc: "align-content 속성은 플렉스 아이템의 상하 정렬을 설정합니다."
//     },
//     {
//         alpha: "",
//         attr: "animation",
//         desc: "animation 속성은 애니메이션을 설정합니다.",
//     },
//     {
//         alpha: "",
//         attr: "animation-delay",
//         desc: "animation-delay 속성은 요소가 로드된 후 애니메이션이 시작될 때 까지의 시간을 나타냅니다.",
//     },
//     {
//         alpha: "",
//         attr: "animation-direction",
//         desc: "animation-direction 속성은 애니메이션 움직임 방향을 설정합니다.",
//     },
//     {
//         alpha: "",
//         attr: "animation-duration",
//         desc: "animation-duration 속성은 애니메이션 움직임 시간을 설정합니다.",
//     }
// ];



// function Reference() {
//     return (
        // <div id="wrap" className="light">
        //     <Header info="none"/>
        //     <Layout>
        //         <section id="referCont">
        //             <div className="container">
        //                 <WrapTitle text={["HTML", "reference"]} />
        //                 <div className="refer-cont">
        //                     <div className="refer-table">
        //                         <h3>CSS REFERENCE</h3>
        //                         <ul>
        //                             {referAttr.map((text) => (
        //                                 <ReferText 
        //                                 key={text.attr}
        //                                 alpha={text.alpha}
        //                                 attr={text.attr}
        //                                 desc={text.desc}
        //                                 />
        //                             ))}
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </section>
        //     </Layout>
        //     <Footer />
//         </div>
//     );
// }

function ReferText({num, alpha, attr, desc}) {
    return (
        <li>
            <Link to="/">
                <span className="alpha">{alpha}</span>
                <span className="attr">{attr}</span>
                <span className="desc">{desc}</span>
            </Link>
        </li>
    );
}



class Reference extends React.Component {
    state = {
        isLoading: true,
        refers : [],
    };

    getRefer = async () => {            // async = 
        const {
          data: {
            data: { htmlRefer },
          },
        } = await axios.get(            // await = 다운받는 동안 기다려라
            "https://jinmopin.github.io/react3100/src/json/reference.json"
            )
        // console.log(htmlRefer);
        this.setState({ htmlRefer, isLoading: false });

    };
    
    componentDidMount() {
        setTimeout(() => {
            //this.setState({isLoading: false});
            this.getRefer();
        }, 3000);
    }

    render() {
        const { isLoading, htmlRefer } = this.state;           //괄호 안은 true값 존재
        return (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <div id="wrap" className="light">
                <Header info="none" />
                <Layout>
                  <section id="referCont">
                    <div className="container">
                      <WrapTitle text={["HTML", "reference"]} />
                      <div className="refer-cont">
                        <div className="refer-table">
                          <h3>CSS Reference</h3>
                          <ul>
                              {htmlRefer.map((refer) => (
                                  <ReferInfo 
                                    alpha={refer.alpha}
                                    attr={refer.attr}
                                    desc={refer.desc}
                                  />
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </Layout>
                <Footer />
              </div>
            )}
            </>
        );
      }
      
}

export default Reference;