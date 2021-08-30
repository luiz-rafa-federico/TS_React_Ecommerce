import React from "react";
import Badge from "@material-ui/core/Badge";
import { Theme, withStyles, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from "../../providers/Cart";

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: 26,
      top: 26,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  })
)(Badge);

export default function CustomizedBadges() {
  const { cart } = useCart();

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cart.length} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
