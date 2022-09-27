import styled from "styled-components";

const InsideMessage = styled.p`
  font-size: 19px;
  font-weight: 400;

  & > sup:hover {
    color: rgb(65, 141, 217);
    cursor: pointer;
  }
`;

const airPodsFeatures = [
  {
    key: "n1",
    title: "One-tap setup",
    image: "./Content_features/tile_onetap_setup_large.jpg",
    image_s: "",
    description: "onetap_setup",
    css: "width: 274px;height: 338px;@media (min-width:980px){width: 343px;height: 376px;transform: translateY(-40px)}",
    content: (
      <InsideMessage>
        Connect immediately to your iPhone or iPad.<sup>1</sup>
      </InsideMessage>
    ),
  },
  {
    key: "n2",
    title: "Personalized Spatial Audio",
    image: "./Content_features/tile_spatial_audio_large.jpg",
    description: "spatial_audio",
    css: "width: 168px;height: 339px;@media (min-width:980px){width: 211px;height: 375px;transform: translateY(-40px)}",
    content: (
      <InsideMessage>
        Personalized Spatial Audio plays three-dimensional sound tuned for your
        specific ear shape — across all your devices.<sup>2</sup>
      </InsideMessage>
    ),
  },
  {
    key: "n3",
    title: "Audio Sharing",
    image: "./Content_features/tile_audio_sharing_large.jpg",
    description: "audio_sharing",
    css: "width: 223px;height: 297px;@media (min-width:980px){width: 265px;height: 352px;}",
    content: (
      <InsideMessage>
        Share a song, podcast, or other audio between two sets of AirPods with
        Audio Sharing.<sup>3</sup>
      </InsideMessage>
    ),
  },
  {
    key: "n4",
    title: "Automatic switching",
    image: "./Content_features/tile_automatic_switching_large.jpg",
    description: "automatic_switching",
    css: "width: 287px;height: 86px;@media (min-width:980px){width: 336px;height: 100px;}",
    content: (
      <InsideMessage>
        Automatic switching allows sound to move seamlessly between your iPhone,
        Apple Watch, iPad, Mac, and Apple TV.<sup>1</sup>
      </InsideMessage>
    ),
  },
  {
    key: "n5",
    title: "Siri",
    image: "./Content_features/tile_siri_large.jpg",
    description: "siri",
    css: "width: 126px;height: 126px;@media (min-width:980px){width: 168px;height: 168px;}",
    content: (
      <InsideMessage>
        A simple “Hey Siri” summons your favorite personal assistant. Control
        your music, calls, volume, directions, and more — without lifting a
        finger.
      </InsideMessage>
    ),
  },
  {
    key: "n6",
    title: "Accessibility",
    image: "./Content_features/tile_accessibility_large.jpg",
    description: "accessibility",
    css: "width: 96px;height: 96px;@media (min-width:980px){width: 135px;height: 135px;}",
    content: (
      <InsideMessage>
        AirPods are loaded with features to assist with select hearing needs,
        from focusing on the voice in front of you in noisy surroundings to
        amplifying the frequencies you may need to hear more clearly.
      </InsideMessage>
    ),
  },
];

export default airPodsFeatures;
