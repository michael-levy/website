import { motion } from "framer-motion";
import styled from "styled-components";
/**
 * Animated button.
 *
 * @param {Boolean} props.selected - whether this button is currently selected
 * @param {Function} props.sort - the sorting function to call
 * @returns
 */
export default function SortButton(props) {
  return (
    <Button
      as={motion.button}
      whileHover={{ scale: 1.05, duration: 2 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        props.sort();
      }}
      style={
        props.selected
          ? { background: "var(--even-lighter-brown)" }
          : { background: "var(--light-brown)" }
      }
    >
      {props.children}
    </Button>
  );
}

const Button = styled.button`
  cursor: pointer;
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  max-width: 200px;
  color: var(--grey);
  margin: 6px;
  border-radius: 10px;
  font-family: var(--body-serif);
  font-size: large;
`;
