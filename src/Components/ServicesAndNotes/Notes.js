import styled from "styled-components/macro";

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 10px;
  line-height: 1.3;
`;

const Container = styled.div`
  width: 980px;
  border-bottom: 2px solid rgb(218, 218, 223);
  color: rgb(145, 142, 145);
  padding: 10px 0;
`;

function Notes() {
  return (
    <Section>
      <Container>
        <div>
          * New subscribers only. HK$58/month after trial. Offer available for a
          limited time to new subscribers who connect an eligible device to an
          Apple device running iOS 15 or iPadOS 15 or later. Offer good for 3
          months after eligible device pairing. No audio product purchase
          necessary for current owners of eligible devices. Plan automatically
          renews until cancelled. Restrictions and other terms apply.
        </div>
        <ol css="padding-left:14px;">
          <li css="margin-bottom:10px">
            Requires an iCloud account and a compatible Apple device running the
            latest operating system software.
          </li>
          <li css="margin-bottom:10px">
            Compatible hardware and software required. Works with compatible
            content in supported apps. Not all content available in Dliby Atmos.
            iPhone with TrueDepth camera required to create a personal profile
            for Spatial Audio, which will sync across Apple devices running the
            latest operating system software, including iOS, iPadOS (coming
            later this fall), macOS (coming later this fall), and tvOS.
          </li>
          <li css="margin-bottom:10px">
            Works with iPhone 8 or later and iPod touch (7th generation) with
            the latest version of iOS; and 12.9-inch iPad Pro (2nd generation or
            later), 11-inch iPad Pro, 10.5-inch iPad Pro, iPad (5th generation
            or later), iPad Air (3rd generation or later), and iPad mini (5th
            generation or later) with the latest version of iPadOS.
          </li>
          <li css="margin-bottom:10px">
            AirPods (3rd generation) and AirPods Pro (2nd generation) are sweat
            and water resistant for non-water sports and exercise, and they are
            IPX4 rated. Sweat and water resistance are not permanent conditions.
          </li>
          <li css="margin-bottom:10px">
            MagSafe charging requires a compatible MagSafe charger. Wireless
            charging requires a Qi-certified wireless charger. AirPods Pro (2nd
            generation) charging case also works with the Apple Watch charger or
            Lightning connector.
          </li>
          <li css="margin-bottom:10px">
            Battery life depends on device settings, environment, usage, and
            many other factors.
          </li>
        </ol>
      </Container>
    </Section>
  );
}

export default Notes;
