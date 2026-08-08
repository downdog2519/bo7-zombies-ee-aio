"""
OBSOLETE generator — do not run blindly.

This script used to emit checklist “cheat sheet” pages. That pattern is WRONG for this app.
Real cheat sheets are interactive code tools (Ashes ingredients/rocket-code, Astra tracker,
Paradox notes/piano, Totenreich/Kowakujo codes/).

Hubs for Astra/Paradox are hand-maintained (original EE + tools).
Totenreich/Kowakujo hubs point at codes/codes.html — do not regenerate cheat-sheet folders.
"""
from pathlib import Path

print(__doc__)
raise SystemExit(
    "Refusing to regenerate: checklist cheat sheets were removed. "
    "Edit pages by hand or extend codes/ tools instead."
)
