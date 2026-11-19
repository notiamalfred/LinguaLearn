// questions-data.js
const QUESTIONS_DATA = {
  core: {
    trigonometry: [
      // Exercise 1 – Level 1
      {
        id: "trig-1a",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 2\\sin\\theta - 5 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = -3, Minimum = -7",
        steps: "Consider the linear function \\(y = 2t - 5\\), Maximum value: \\(y = 2(1) - 5 = - 3\\), Minimum value: \\(y = 2( - 1) - 5 = - 7\\)"
      },
      {
        id: "trig-1b",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 3 - 4\\cos\\theta \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 7, Minimum = -1",
        steps: "Consider the linear function \\(y = 3 - 4t\\), Maximum value: \\(y = 3 - 4( - 1) = 7\\), Minimum value: \\(y = 3 - 4(1) = - 1\\)"
      },
      // Exercise 2 – Level 1
      {
        id: "trig-2a",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 2\\cos^2\\theta - 5 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = -3, Minimum = -5",
        steps: "Consider the quadratic function \\(y = 2t^{2} - 5\\), Maximum value: \\(y = 2(1) - 5 = - 3\\), Minimum value: \\(y = 2(0) - 5 = - 5\\)"
      },
      {
        id: "trig-2b",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 3 - 4\\sin^2\\theta \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 3, Minimum = -1",
        steps: "Consider the quadratic function \\(y = 3 - 4t^{2}\\), Maximum value: \\(y = 3 - 4(0) = 3\\), Minimum value: \\(y = 3 - 4(1) = - 1\\)"
      },
      {
        id: "trig-2c",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 1,
        question: "Find the maximum and minimum value of \\( y = 1 - 2\\sin^2\\theta + 3\\cos^2\\theta \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 4, Minimum = -1",
        steps: "Note that \\(y = 1 - 2\\sin^{2}\\theta + 3\\cos^{2}\\theta = 1 - 2\\sin^{2}\\theta + 3(1 - \\sin^{2}\\theta) = 4 - 5\\sin^{2}\\theta\\). Consider \\(y = 4 - 5t^{2}\\), Maximum value: \\(y = 4 - 5(0) = 4\\), Minimum value: \\(y = 4 - 5(1) = - 1\\)\nFigure 1: Graph of \\(y = 1 - 2\\sin^{2}\\theta + 3\\cos^{2}\\theta\\): it keeps the shape of sine graphs with wider ranges.",
        stepsImages: [{ src: "images/trig-2c-sol.png", width: 518 }]
      },
      // Exercise 3 – Level 2
      {
        id: "trig-3a",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = (1 - 4\\sin\\theta)^2 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 25, Minimum = 0",
        steps: "Consider \\(y = (1 - 4t)^{2}\\). By substituting \\(t = 1\\) and \\(- 1\\) to \\(1 - 4t\\), values are \\(- 3\\) and \\(5\\) (\\(0\\) is inside range). Maximum value: \\(y = (5)^{2} = 25\\), Minimum value: \\(y = (0)^{2} = 0\\)."
      },
      {
        id: "trig-3b",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = -(4\\cos\\theta - 3)^2 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 0, Minimum = -49",
        steps: "Consider \\(y = - (4t - 3)^{2}\\). For \\(4t - 3\\), the values at \\(t = 1, - 1\\) are \\(1\\) and \\(- 7\\) (\\(0\\) is inside the range). Hence \\((4t - 3)^{2}\\) has maximum value \\(49\\) and minimum value \\(0\\), so \\(y = - (4t - 3)^{2}\\) has maximum value \\(0\\) and minimum value \\(- 49\\)."
      },
      {
        id: "trig-3c",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = 4\\sin^2\\theta + 4\\sin\\theta + 1 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 9, Minimum = 0",
        steps: "\\(y = 4\\sin^{2}\\theta + 4\\sin\\theta + 1 = (2\\sin\\theta + 1)^{2}\\). Consider \\(y = (2t + 1)^{2}\\). The values of \\(2t + 1\\) at \\(t = 1, - 1\\) are \\(3\\) and \\(- 1\\) (\\(0\\) is inside the range). Maximum value: \\(y = 3^{2} = 9\\), Minimum value: \\(y = 0^{2} = 0\\)."
      },
      // Exercise 4 – Level 2 (from image 3)
      {
        id: "trig-4a",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = 2\\sin^2\\theta - 2\\sin\\theta - 4 \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 0, Minimum = -4.5",
        steps: "\\(y = 2\\left( \\sin\\theta - \\frac{1}{2} \\right)^{2} - \\frac{9}{2}\\). Substituting \\(t = 1,\\frac{1}{2}, - 1\\) into \\(2\\left( t - \\frac{1}{2} \\right)^{2} - \\frac{9}{2}\\) gives \\(- 4, - \\frac{9}{2},0\\). Maximum value \\(= 0\\), Minimum value \\(= - \\frac{9}{2}\\)."
      },
      {
        id: "trig-4b",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = (2\\cos\\theta - 1)(\\cos\\theta - 2) \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 9, Minimum = -1",
        steps: "\\(y = 2\\cos^{2}\\theta - 5\\cos\\theta + 2 = 2\\left( \\cos\\theta - \\frac{5}{4} \\right)^{2} - \\frac{9}{8}\\). Substituting \\(t = 1\\) and \\(- 1\\) gives \\(- 1\\) and \\(9\\). Maximum value \\(= 9\\), Minimum value \\(= - 1\\)."
      },
      // Exercise 5 – Level 2 (from image 2 – rational forms, no max/min in some cases)
      {
        id: "trig-5a",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum/minimum value (if any) of \\( y = \\dfrac{-6\\sin\\theta}{3\\sin\\theta - 1} \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "No maximum or minimum",
        steps: "\\(y = - 2 - \\frac{2}{3\\sin\\theta - 1}\\). Since \\(t = \\frac{1}{3}\\) is in \\(\\lbrack - 1,1\\rbrack\\), denominator can be \\(0\\Rightarrow \\) there is no maximum nor minimum."
      },
      {
        id: "trig-5b",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum/minimum value of \\( y = \\dfrac{4\\cos\\theta}{2 - \\cos\\theta} \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 4, Minimum = -4/3",
        steps: "\\(y = - 4 + \\frac{8}{2 - \\cos\\theta}\\). For \\(- 1 \\leq t \\leq 1\\), Maximum value \\(= - 4 + \\frac{8}{2 - 1} = 4\\), Minimum value \\(= - 4 + \\frac{8}{2 - ( - 1)} = - \\frac{4}{3}\\)."
      },
      {
        id: "trig-5c",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum/minimum value of \\( y = \\dfrac{2\\cos^2\\theta}{2 + \\sin^2\\theta} \\) for \\( 0^\\circ \\le \\theta \\le 360^\\circ \\).",
        answer: "Maximum = 1, Minimum = 0",
        steps: "\\(y = \\frac{2 - 2\\sin^{2}\\theta}{2 + \\sin^{2}\\theta} = - 2 + \\frac{6}{2 + \\sin^{2}\\theta}\\). For \\(0 \\leq t^{2} \\leq 1\\), Maximum value \\(= - 2 + \\frac{6}{2 + 0} = 1\\), Minimum value \\(= - 2 + \\frac{6}{2 + 1} = 0\\)."
      },
      // Exercise 6 – Level 2 (from image 1 – restricted domains)
      {
        id: "trig-6a",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = 3 - 4\\cos\\theta \\) where \\( 90^\\circ \\le \\theta \\le 180^\\circ \\).",
        answer: "Maximum = 7, Minimum = 3",
        steps: "For \\(90^{\\circ} \\leq \\theta \\leq 180^{\\circ}\\), \\(- 1 \\leq \\cos\\theta \\leq 0\\). Maximum value \\(= 3 - 4( - 1) = 7\\), minimum value \\(= 3 - 4(0) = 3\\)."
      },
      {
        id: "trig-6b",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = (1 - 4\\sin\\theta)^2 \\) where \\( 90^\\circ \\le \\theta \\le 150^\\circ \\).",
        answer: "Maximum = 9, Minimum = 1",
        steps: "For \\(90^{\\circ} \\leq \\theta \\leq 150^{\\circ}\\), \\(\\frac{1}{2} \\leq \\sin\\theta \\leq 1\\). Maximum value \\(= (1 - 4 \\times 1)^{2} = 9\\), minimum value \\(= \\left( 1 - 4 \\times \\frac{1}{2} \\right)^{2} = 1\\)."
      },
      {
        id: "trig-6c",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        level: 2,
        question: "Find the maximum and minimum value of \\( y = 2\\sin^2\\theta - 2\\sin\\theta - 4 \\) where \\( 90^\\circ \\le \\theta \\le 150^\\circ \\).",
        answer: "Maximum = -4, Minimum = -9/2",
        steps: "\\(y = 2\\left( \\sin\\theta - \\frac{1}{2} \\right)^{2} - \\frac{9}{2}\\) for \\(\\frac{1}{2} \\leq \\sin\\theta \\leq 1\\). Maximum value \\(= 2\\left( 1 - \\frac{1}{2} \\right)^{2} - \\frac{9}{2} = - 4\\), Minimum value \\(= - \\frac{9}{2}\\)."
      },

      // ---- Chapter 10 A) Maximum and Minimum Values of Trigonometric Functions: Summarizing Exercises 7-9 ----
      {
        id: "trig-7",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        question: "[Level 2]\nFind the maximum/minimum value of these functions for \\(0^{\\circ} \\leq \\theta \\leq 360^{\\circ}\\).\n(a) \\(y = 5 - 3\\cos\\theta\\)\n(b) \\(y = \\frac{48}{3\\cos^{2}\\theta + 4\\sin^{2}\\theta}\\) (2526-WYK-S4-Final-II-Q42)\n(c) \\(y = \\cos^{2}\\theta - 2\\cos\\theta + 2\\)\n(d) \\(y = \\frac{6 + 6\\sin\\theta}{3 + 2\\sin\\theta}\\)\n(e) \\(y = (\\sin\\theta + 1)^{2}(\\sin\\theta - 1)^{2}\\)\n(f) \\(y = \\frac{2(\\sin\\theta - 2)^{2}}{\\sin^{2}\\theta - 4\\sin\\theta + 3}\\) (Challenging)\n(g) \\(y = \\frac{4\\sin^{2}\\theta - 4\\sin\\theta - 7}{(2\\sin\\theta - 1)^{2}}\\) (Challenging) (2425-WYK-S4-Final-II-Q44)\n(h) \\(y = - \\tan^{2}\\theta - 2\\tan\\theta\\)",
        answer: "(a) Maximum = \\(8\\), Minimum = \\(2\\)\n(b) Maximum = \\(16\\), Minimum = \\(12\\)\n(c) Maximum = \\(5\\), Minimum = \\(1\\)\n(d) Maximum = \\(\\frac{12}{5}\\), Minimum = \\(0\\)\n(e) Maximum = \\(1\\), Minimum = \\(0\\)\n(f) No maximum value; Minimum = \\(\\frac{9}{4}\\)\n(g) Maximum = \\(\\frac{1}{9}\\); no minimum value\n(h) Maximum = \\(1\\); no minimum value",
        steps: "(a) Maximum value: \\(5 - 3( - 1) = 8\\), Minimum value: \\(5 - 3(1) = 2\\)\n(b) \\(y = \\frac{48}{3 + \\sin^{2}\\theta}\\Rightarrow \\) Maximum value: \\(\\frac{48}{3 + 0} = 16\\), Minimum value: \\(\\frac{48}{3 + 1} = 12\\)\n(c) \\(y = (\\cos\\theta - 1)^{2} + 1\\Rightarrow \\) Maximum value: \\(( - 2)^{2} + 1 = 5\\), Minimum value: \\(0^{2} + 1 = 1\\)\n(d) \\(y = 3 - \\frac{3}{3 + 2\\sin\\theta}\\Rightarrow \\) Maximum value: \\(3 - \\frac{3}{3 + 2(1)} = \\frac{12}{5}\\), Minimum value: \\(3 - \\frac{3}{3 + 2( - 1)} = 0\\)\n(e) \\(y = (\\sin^{2}\\theta - 1)^{2} = \\cos^{4}\\theta \\Rightarrow \\) Maximum value: \\(1^{4} = 1\\), Minimum value: \\(0^{4} = 0\\)\n(f) \\(y = 2 + \\frac{2}{(\\sin\\theta - 2)^{2} - 1}\\). When \\(\\sin\\theta = 1\\), denominator \\(= 0\\Rightarrow \\) no maximum value. Minimum value \\(= 2 + \\frac{2}{( - 1 - 2)^{2} - 1} = \\frac{9}{4}\\).\n(g) \\(y = 1 - \\frac{8}{(2\\sin\\theta - 1)^{2}}\\). When \\(\\sin\\theta = \\frac{1}{2}\\), denominator \\(= 0\\Rightarrow \\) no minimum value. Maximum value: \\(1 - \\frac{8}{\\lbrack 2( - 1) - 1\\rbrack^{2}} = \\frac{1}{9}\\).\n(h) \\(y = - (\\tan\\theta + 1)^{2} + 1\\Rightarrow \\) Maximum value: \\(- (0)^{2} + 1 = 1\\). No minimum value."
      },
      {
        id: "trig-8",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        question: "[Level 2]\nFind the maximum/minimum value of these functions.\n(a) \\(y = \\frac{5 - \\sin\\theta}{4 + \\sin\\theta}\\) where \\(0^{\\circ} \\leq \\theta \\leq 90^{\\circ}\\) (2005-CE-MATH-II-Q20)\n(b) \\(y = \\frac{1}{(3 - 2\\sin\\theta)^{3}}\\) where \\(180^{\\circ} \\leq \\theta \\leq 360^{\\circ}\\)\n(c) \\(y = 2\\tan^{2}\\theta - 4\\sqrt{3}\\tan\\theta + 1\\) where \\(180^{\\circ} \\leq \\theta \\leq 270^{\\circ}\\)",
        answer: "(a) Maximum = \\(\\frac{5}{4}\\), Minimum = \\(\\frac{4}{5}\\)\n(b) Maximum = \\(\\frac{1}{27}\\), Minimum = \\(\\frac{1}{125}\\)\n(c) No maximum value; Minimum = \\(- 5\\)",
        steps: "(a) For \\(0^{\\circ} \\leq \\theta \\leq 90^{\\circ},0 \\leq \\sin\\theta \\leq 1\\). \\(y = - 1 + \\frac{9}{4 + \\sin\\theta}\\Rightarrow \\) Maximum value \\(= - 1 + \\frac{9}{4 + 0} = \\frac{5}{4}\\), minimum value \\(= - 1 + \\frac{9}{4 + 1} = \\frac{4}{5}\\).\n(b) For \\(180^{\\circ} \\leq \\theta \\leq 360^{\\circ}, - 1 \\leq \\sin\\theta \\leq 0\\). Maximum value \\(= \\frac{1}{\\lbrack 3 - 2(0)\\rbrack^{3}} = \\frac{1}{27}\\), minimum value \\(= \\frac{1}{\\lbrack 3 - 2( - 1)\\rbrack^{3}} = \\frac{1}{125}\\).\n(c) For \\(180^{\\circ} \\leq \\theta \\leq 270^{\\circ},\\tan\\theta \\geq 0\\). \\(y = 2(\\tan\\theta - \\sqrt{3})^{2} - 5\\Rightarrow \\) There is no maximum value. Minimum value: \\(2(0)^{2} - 5 = - 5\\)."
      },
      {
        id: "trig-9",
        type: "Maximum and Minimum Values of Trigonometric Functions",
        question: "[Level 3]\nFind the values of the unknown, which are non-zero integers, of the following functions:\n(a) \\(y = a\\sin\\theta + b\\), with maximum value \\(6\\) and minimum value \\(- 2\\).\n(b) \\(y = p\\cos\\theta - q\\), with maximum value \\(7\\) and minimum value \\(- 3\\).\n(c) \\(y = (u\\sin\\theta + v)^{2}\\), with maximum value \\(9\\) and minimum value \\(1\\).",
        answer: "(a) \\(a = 4,b = 2\\) or \\(a = - 4,b = 2\\)\n(b) \\(p = 5,q = - 2\\) or \\(p = - 5,q = - 2\\)\n(c) \\(u = 1,v = 2\\); \\(u = - 1,v = 2\\); \\(u = 1,v = - 2\\); or \\(u = - 1,v = - 2\\)",
        steps: "(a) Case 1 (\\(a > 0\\)): \\(a + b = 6, - a + b = - 2\\Rightarrow a = 4,b = 2\\). Case 2 (\\(a < 0\\)): \\(- a + b = 6,a + b = - 2\\Rightarrow a = - 4,b = 2\\).\n(b) Case 1 (\\(p > 0\\)): \\(p - q = 7, - p - q = - 3\\Rightarrow p = 5,q = - 2\\). Case 2 (\\(p < 0\\)): \\(- p - q = 7,p - q = - 3\\Rightarrow p = - 5,q = - 2\\).\n(c) Case 1 (\\(u\\sin\\theta + v \\in \\lbrack 1,3\\rbrack,u > 0\\)): \\(u = 1,v = 2\\). Case 2 (\\(u < 0\\)): \\(u = - 1,v = 2\\). Case 3 (\\(u\\sin\\theta + v \\in \\lbrack - 3, - 1\\rbrack,u > 0\\)): \\(u = 1,v = - 2\\). Case 4 (\\(u < 0\\)): \\(u = - 1,v = - 2\\)."
      },
      // ---- Chapter 10 B) Sequences related to Trigonometric Ratios ----
      {
        id: "trig-b1",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 1] \\(\\sin^{2}185^{\\circ} + \\sin^{2}189^{\\circ} + \\sin^{2}193^{\\circ} + \\ldots + \\sin^{2}265^{\\circ}\\)",
        answer: "\\(10.5\\)",
        steps: "\\(= \\sin^{2}5^{\\circ} + \\sin^{2}9^{\\circ} + \\sin^{2}13^{\\circ} + \\ldots + \\sin^{2}85^{\\circ} = (\\sin^{2}5^{\\circ} + \\cos^{2}5^{\\circ}) + \\ldots + (\\sin^{2}41^{\\circ} + \\cos^{2}41^{\\circ}) + \\sin^{2}45^{\\circ} = 1 \\times 10 + 0.5 = 10.5\\)\nRemarks: Sum \\(=\\) Number of terms \\(\\times \\frac{1}{2} = 21 \\times \\frac{1}{2} = 10.5\\)."
      },
      {
        id: "trig-b2",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 1] \\(\\sin^{2}1^{\\circ} + \\sin^{2}2^{\\circ} + \\sin^{2}3^{\\circ} + \\ldots + \\sin^{2}359^{\\circ} + \\sin^{2}360^{\\circ}\\)",
        answer: "\\(180\\)",
        steps: "\\(= 4(\\sin^{2}1^{\\circ} + \\sin^{2}2^{\\circ} + \\ldots + \\sin^{2}89^{\\circ}) + 1 + 0 + 1 + 0 = 4(44 + 0.5) + 2 = 180\\)"
      },
      {
        id: "trig-b3",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 1] [2425-WYK-S4-Final-II-Q43] \\(\\sin^{2}1^{\\circ} + \\sin^{2}3^{\\circ} + \\sin^{2}5^{\\circ} + \\ldots + \\sin^{2}179^{\\circ}\\)",
        answer: "\\(45\\)",
        steps: "\\(= 2\\lbrack(\\sin^{2}1^{\\circ} + \\sin^{2}89^{\\circ}) + \\ldots + (\\sin^{2}43^{\\circ} + \\sin^{2}47^{\\circ}) + \\sin^{2}45^{\\circ}\\rbrack = 2(1 \\times 22 + 0.5) = 45\\)"
      },
      {
        id: "trig-b4",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 1] \\(\\tan 91^{\\circ}\\tan 93^{\\circ}\\tan 95^{\\circ}\\ldots\\tan 177^{\\circ}\\tan 179^{\\circ}\\)",
        answer: "\\(- 1\\)",
        steps: "\\(= ( - \\tan 1^{\\circ})( - \\tan 3^{\\circ})\\ldots( - \\tan 45^{\\circ})\\left( - \\frac{1}{\\tan 43^{\\circ}} \\right)\\ldots\\left( - \\frac{1}{\\tan 1^{\\circ}} \\right) = - \\tan 45^{\\circ} = - 1\\)"
      },
      {
        id: "trig-b5",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 1] \\(\\cos 1^{\\circ} - \\cos 2^{\\circ} + \\cos 3^{\\circ} - \\cos 4^{\\circ} + \\ldots + \\cos 179^{\\circ}\\)",
        answer: "\\(0\\)",
        steps: "\\(= (\\cos 1^{\\circ} + \\cos 179^{\\circ}) - (\\cos 2^{\\circ} + \\cos 178^{\\circ}) + \\ldots + (\\cos 89^{\\circ} + \\cos 91^{\\circ}) - \\cos 90^{\\circ} = - \\cos 90^{\\circ} = 0\\)"
      },
      {
        id: "trig-b6",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 2] [1991-CE-Math-II-Q47] \\(\\cos 90^{\\circ} + \\cos 180^{\\circ} + \\cos 270^{\\circ} + \\cos 360^{\\circ} + \\ldots + \\cos 1800^{\\circ}\\)",
        answer: "\\(0\\)",
        steps: "\\(= (\\cos 90^{\\circ} + \\cos 180^{\\circ} + \\cos 270^{\\circ} + \\cos 360^{\\circ}) \\times \\frac{1800}{360} = (0 - 1 + 0 + 1) \\times 5 = 0\\)"
      },
      {
        id: "trig-b7",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 2] \\(\\cos^{2}275^{\\circ} - \\cos^{2}280^{\\circ} + \\cos^{2}285^{\\circ} - \\cos^{2}290^{\\circ} + \\ldots - \\cos^{2}450^{\\circ}\\)",
        answer: "\\(0\\)",
        steps: "\\(= 2\\lbrack(\\cos^{2}85^{\\circ} + \\cos^{2}5^{\\circ}) + \\ldots + (\\cos^{2}55^{\\circ} + \\cos^{2}35^{\\circ}) + \\cos^{2}45^{\\circ}\\rbrack - 2\\lbrack(\\cos^{2}80^{\\circ} + \\cos^{2}10^{\\circ}) + \\ldots + (\\cos^{2}50^{\\circ} + \\cos^{2}40^{\\circ})\\rbrack - \\cos^{2}0^{\\circ} = 2(4 + 0.5) - 2(4) - 1 = 0\\)"
      },
      {
        id: "trig-b8",
        type: "Sequences related to Trigonometric Ratios",
        question: "Find the values of the following sequences.\n[Level 2] [2526-WYK-S5-Midyear-II-Q32] \\(\\log_{10}(\\tan 1^{\\circ}) + \\log_{10}(\\tan 2^{\\circ}) + \\log_{10}(\\tan 3^{\\circ}) + \\ldots + \\log_{10}(\\tan 89^{\\circ})\\)",
        answer: "\\(0\\)",
        steps: "\\(= \\log_{10}\\lbrack(\\tan 1^{\\circ})(\\tan 2^{\\circ})(\\tan 3^{\\circ})\\ldots(\\tan 89^{\\circ})\\rbrack = \\log_{10}\\lbrack 1\\rbrack = 0\\)"
      },
      // ---- Chapter 10 C) Trigonometric Equations ----
      {
        id: "trig-c1",
        type: "Trigonometric Equations",
        question: "[Level 1] Solve \\(\\sin(x + 45^{\\circ}) = \\frac{1}{2}\\) for \\(0^{\\circ} \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 105^{\\circ}\\) or \\(345^{\\circ}\\)",
        steps: "\\(45^{\\circ} \\leq x + 45^{\\circ} \\leq 405^{\\circ}\\Rightarrow x + 45^{\\circ} = 150^{\\circ}\\ or\\ 390^{\\circ}\\Rightarrow x = 105^{\\circ}\\ or\\ 345^{\\circ}\\)"
      },
      {
        id: "trig-c2",
        type: "Trigonometric Equations",
        question: "[Level 1] Solve \\(\\cos(2x + 30^{\\circ}) = \\frac{1}{2}\\) for \\(0^{\\circ} \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 15^{\\circ},135^{\\circ},195^{\\circ}\\) or \\(315^{\\circ}\\)",
        steps: "\\(30^{\\circ} \\leq 2x + 30^{\\circ} \\leq 750^{\\circ}\\Rightarrow 2x + 30^{\\circ} = 60^{\\circ},300^{\\circ},420^{\\circ}\\ or\\ 660^{\\circ}\\Rightarrow x = 15^{\\circ},135^{\\circ},195^{\\circ}\\ or\\ 315^{\\circ}\\)"
      },
      {
        id: "trig-c3",
        type: "Trigonometric Equations",
        question: "[Level 1] [2223-WYK-S4-MATH-II-Q28] For \\(0 \\leq x < 360^{\\circ}\\), how many roots does the equation \\(4\\cos^{2}x - 3\\cos^{4}x = 1\\) have?",
        answer: "\\(6\\) roots",
        steps: "\\((3\\cos^{2}x - 1)(\\cos^{2}x - 1) = 0\\Rightarrow \\cos x = \\pm \\frac{1}{\\sqrt{3}}\\ or\\ \\pm 1\\). \\(4\\) roots for \\(\\pm \\frac{1}{\\sqrt{3}}\\) plus \\(0^{\\circ}\\) and \\(180^{\\circ}\\) (\\(360^{\\circ}\\) excluded) \\(\\Rightarrow 6\\) roots in total."
      },
      {
        id: "trig-c4",
        type: "Trigonometric Equations",
        question: "[Level 1] [2026-DSE-Math-II-Q41] For \\(90^{\\circ} \\leq \\theta \\leq 360^{\\circ}\\), how many roots does the equation \\(6\\sin^{4}\\theta - 5\\sin^{2}\\theta + 1 = 0\\) have?",
        answer: "\\(6\\) roots",
        steps: "\\((3\\sin^{2}\\theta - 1)(2\\sin^{2}\\theta - 1) = 0\\Rightarrow \\sin\\theta = \\pm \\frac{1}{\\sqrt{3}}\\) or \\(\\pm \\frac{1}{\\sqrt{2}}\\). On \\(\\lbrack 90^{\\circ},360^{\\circ}\\rbrack\\), \\(2\\) roots in QII and \\(4\\) roots in QIII/QIV \\(\\Rightarrow 6\\) roots in total."
      },
      {
        id: "trig-c5",
        type: "Trigonometric Equations",
        question: "[Level 1] Solve \\(2\\sin^{2}x - \\sin x\\cos x - 5\\cos^{2}x = 0\\) for \\(0 \\leq x \\leq 360^{\\circ}\\). (Hint: You need to use the quadratic formula first)",
        answer: "\\(x = 61.6^{\\circ},127^{\\circ},242^{\\circ}\\) or \\(307^{\\circ}\\)",
        steps: "\\(2\\tan^{2}x - \\tan x - 5 = 0\\Rightarrow \\tan x = \\frac{1 \\pm \\sqrt{41}}{4}\\Rightarrow x = 61.6^{\\circ},127^{\\circ},242^{\\circ}\\ or\\ 307^{\\circ}\\)"
      },
      {
        id: "trig-c6",
        type: "Trigonometric Equations",
        question: "[Level 1] Solve \\(2 - 5\\cos x\\sin x = 0\\) for \\(90^{\\circ} \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 207^{\\circ}\\) or \\(243^{\\circ}\\)",
        steps: "\\(2\\tan^{2}x - 5\\tan x + 2 = 0\\Rightarrow (2\\tan x - 1)(\\tan x - 2) = 0\\Rightarrow \\tan x = \\frac{1}{2}\\ or\\ 2\\Rightarrow x = 207^{\\circ}\\ or\\ 243^{\\circ}\\)"
      },
      {
        id: "trig-c7",
        type: "Trigonometric Equations",
        question: "[Level 2] Solve \\(2\\cos^{2}x - \\cos x = 3\\sin x - 6\\sin x\\cos x\\) for \\(0 \\leq x \\leq 360^{\\circ}\\). (Hint: You need to factorize the expression first)",
        answer: "\\(x = 60^{\\circ},162^{\\circ},300^{\\circ}\\) or \\(342^{\\circ}\\)",
        steps: "\\((2\\cos x - 1)(\\cos x + 3\\sin x) = 0\\Rightarrow \\cos x = \\frac{1}{2}\\ or\\ \\tan x = - \\frac{1}{3}\\Rightarrow x = 60^{\\circ},162^{\\circ},300^{\\circ}\\ or\\ 342^{\\circ}\\)"
      },
      {
        id: "trig-c8",
        type: "Trigonometric Equations",
        question: "[Level 2] Solve \\(5\\tan^{2}x - 3\\cos x - 3\\tan x + 5\\tan x\\cos x = 0\\) for \\(90^{\\circ} \\leq x \\leq 270^{\\circ}\\).",
        answer: "\\(x = 211^{\\circ}\\) or \\(218^{\\circ}\\)",
        steps: "\\((\\tan x + \\cos x)(5\\tan x - 3) = 0\\Rightarrow \\sin^{2}x - \\sin x - 1 = 0\\ or\\ \\tan x = \\frac{3}{5}\\Rightarrow \\sin x = \\frac{1 - \\sqrt{5}}{2}\\ or\\ \\tan x = \\frac{3}{5}\\Rightarrow x = 211^{\\circ}\\ or\\ 218^{\\circ}\\)"
      },
      {
        id: "trig-c9",
        type: "Trigonometric Equations",
        question: "[Level 2] Solve \\(\\sin x = \\cos 166^{\\circ}\\) for \\(0 \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 256^{\\circ}\\) or \\(284^{\\circ}\\)",
        steps: "\\(\\sin x = - \\cos 14^{\\circ}\\Rightarrow \\sin x = \\sin(270^{\\circ} \\pm 14^{\\circ})\\Rightarrow x = 256^{\\circ}\\ or\\ 284^{\\circ}\\)"
      },
      {
        id: "trig-c10",
        type: "Trigonometric Equations",
        question: "[Level 2] Solve \\(\\sin x = - \\sin 205^{\\circ}\\) for \\(0 \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 25^{\\circ}\\) or \\(155^{\\circ}\\)",
        steps: "\\(- \\sin 205^{\\circ} = \\sin 25^{\\circ}\\Rightarrow x = 25^{\\circ}\\ or\\ 155^{\\circ}\\)"
      },
      {
        id: "trig-c11",
        type: "Trigonometric Equations",
        question: "[Level 2] Solve \\(4\\sin x - 3\\cos x - 3 = 0\\) for \\(0 \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 73.7^{\\circ}\\) or \\(180^{\\circ}\\)",
        steps: "\\(16 - 16\\cos^{2}x = 9 + 18\\cos x + 9\\cos^{2}x\\Rightarrow (25\\cos x - 7)(\\cos x + 1) = 0\\Rightarrow x = 73.7^{\\circ}\\ or\\ 180^{\\circ}\\) (\\(286^{\\circ}\\) rej.)"
      },
      {
        id: "trig-c12",
        type: "Trigonometric Equations",
        question: "[Level 2] Solve \\(25\\sin x - 15\\cos x - 3 = 0\\) for \\(0 \\leq x \\leq 360^{\\circ}\\).",
        answer: "\\(x = 36.9^{\\circ}\\) or \\(205^{\\circ}\\)",
        steps: "\\(850\\cos^{2}x + 90\\cos x - 616 = 0\\Rightarrow (5\\cos x - 4)(85\\cos x + 77) = 0\\Rightarrow x = 36.9^{\\circ}\\ or\\ 205^{\\circ}\\) (\\(155^{\\circ},323^{\\circ}\\) rej.)"
      },
      {
        id: "trig-c13",
        type: "Trigonometric Equations",
        question: "[Level 2] If \\(\\sin\\theta\\) and \\(\\cos\\theta\\) are the roots of the quadratic equation \\(3x^{2} + x - m = 0\\), find the value of \\(m\\).",
        answer: "\\(m = \\frac{4}{3}\\)",
        steps: "\\(\\sin\\theta + \\cos\\theta = - \\frac{1}{3}\\Rightarrow 1 + 2\\sin\\theta\\cos\\theta = \\frac{1}{9}\\Rightarrow 2\\left( - \\frac{m}{3} \\right) = - \\frac{8}{9}\\Rightarrow m = \\frac{4}{3}\\)"
      },
      {
        id: "trig-c14",
        type: "Trigonometric Equations",
        question: "[Level 2]\n(a) Prove that \\(2x + 1\\) is a factor of \\(2x^{3} + 5x^{2} - 4x - 3\\).\n(b) Hence, solve \\(2\\sin^{3}x + 5\\sin^{2}x - 4\\sin x - 3 = 0\\) for \\(0 \\leq x \\leq 360^{\\circ}\\).",
        answer: "(a) \\(2x + 1\\) is a factor.\n(b) \\(x = 90^{\\circ},210^{\\circ}\\) or \\(330^{\\circ}\\)",
        steps: "(a) \\(2\\left( - \\frac{1}{2} \\right)^{3} + 5\\left( - \\frac{1}{2} \\right)^{2} - 4\\left( - \\frac{1}{2} \\right) - 3 = 0\\therefore 2x + 1\\) is a factor.\n(b) \\((2\\sin x + 1)(\\sin x - 1)(\\sin x + 3) = 0\\Rightarrow \\sin x = - \\frac{1}{2}\\ or\\ 1\\Rightarrow x = 90^{\\circ},210^{\\circ}\\ or\\ 330^{\\circ}\\)."
      },
      {
        id: "trig-c15",
        type: "Trigonometric Equations",
        question: "[Level 2]\n(a) Prove that \\(x + 1\\) is a factor of \\(2x^{3} + 2x^{2} - x - 1\\).\n(b) Hence, solve \\(2\\sin^{3}\\theta + 1 = 2\\cos^{2}\\theta + \\sin\\theta\\) for \\(0^{\\circ} < \\theta < 270^{\\circ}\\).",
        answer: "(a) \\(x + 1\\) is a factor.\n(b) \\(\\theta = 45^{\\circ},135^{\\circ}\\) or \\(225^{\\circ}\\)",
        steps: "(a) \\(2( - 1)^{3} + 2( - 1)^{2} - ( - 1) - 1 = 0\\therefore x + 1\\) is a factor.\n(b) \\((\\sin\\theta + 1)(2\\sin^{2}\\theta - 1) = 0\\Rightarrow \\sin\\theta = - 1\\ or\\ \\pm \\frac{1}{\\sqrt{2}}\\Rightarrow \\theta = 45^{\\circ},135^{\\circ}\\ or\\ 225^{\\circ}\\)."
      },
      {
        id: "trig-c16",
        type: "Trigonometric Equations",
        question: "[Level 3] Let \\(g(x) = 4x^{3} + 4x^{2} - 3x - 3\\).\n(a) Solve the equation \\(g(x) = 0\\).\n(b) Jason claims that the equation \\(g(\\sin 2\\theta) = 0\\) has \\(6\\) roots, where \\(0^{\\circ} \\leq \\theta \\leq 180^{\\circ}\\). Do you agree? Explain your answer.",
        answer: "(a) \\(x = - 1\\) or \\(- \\frac{\\sqrt{3}}{2}\\) or \\(\\frac{\\sqrt{3}}{2}\\)\n(b) Disagree. \\(\\theta = 30^{\\circ},60^{\\circ},120^{\\circ},135^{\\circ},150^{\\circ}\\), so there are \\(5\\) roots.",
        steps: "(a) \\((x + 1)(2x + \\sqrt{3})(2x - \\sqrt{3}) = 0\\Rightarrow x =\\) \\(- 1\\) or \\(- \\frac{\\sqrt{3}}{2}\\) or \\(\\frac{\\sqrt{3}}{2}\\).\n(b) \\(0^{\\circ} \\leq 2\\theta \\leq 360^{\\circ}\\). \\(\\sin 2\\theta = - 1\\Rightarrow \\theta = 135^{\\circ}\\); \\(\\sin 2\\theta = - \\frac{\\sqrt{3}}{2}\\Rightarrow \\theta = 120^{\\circ},150^{\\circ}\\); \\(\\sin 2\\theta = \\frac{\\sqrt{3}}{2}\\Rightarrow \\theta = 30^{\\circ},60^{\\circ}\\). Thus \\(\\theta = 30^{\\circ},60^{\\circ},120^{\\circ},135^{\\circ},150^{\\circ}\\) (\\(5\\) roots). Disagree."
      }
    ],

    // Practice questions for S.4 (Wah Yan College, Kowloon 2026-2027), converted from the two "Editable" Word files.
    // Fields:  id (unique - never change it once students may have saved progress), question, answer,
    //          type (optional: the question type shown after choosing a topic, e.g. "Centers of Triangle"),
    //          steps (optional: worked solution, "\n" = new line), images / stepsImages (optional figures, see images/).
    // Maths is written inside \( ... \) .
    // ===== S.4 Quadratic Equation (S4_Math_1_Quadratic_Equation_Editable.docx) =====
    quadratic_equation: [
      // ---- Chapter 1 A) Solving Quadratic Equations ----
      {
        id: "qe-1a-ex1",
        type: "Solving Quadratic Equations",
        question: "Solve the following quadratic equations with the best method. Circle the method you use.\n(a) \\(x(3x + 4) = 9x^{2} - 16\\)\n(b) \\(x(3x + 4) = 2(x^{2} + 6)\\)\n(c) \\((3x - 4)^{2} = 4x^{2}\\)\n(d) \\(x(3x - 4) = - 2(x^{2} - 6)\\)\n(e) [Challenging] \\((x - 2)(x - 3) = (a - 2)(a - 3)\\)",
        answer: "(a) \\(x = - \\frac{4}{3}\\) or \\(x = 2\\)\n(b) \\(x = - 6\\) or \\(x = 2\\)\n(c) \\(x = 4\\) or \\(x = \\frac{4}{5}\\)\n(d) \\(x = 2\\) or \\(x = - \\frac{6}{5}\\)\n(e) \\(x = a\\) or \\(x = 5 - a\\)",
        steps: "(a) Method 1 / [Method 2] / Method 3 / Method 4.\n\\(x(3x + 4) = 9x^{2} - 16\\)\n\\(x(3x + 4) = (3x + 4)(3x - 4)\\)\n\\((3x + 4)(x - 3x + 4) = 0\\)\n\\((3x + 4)( - 2x + 4) = 0\\)\n\\(x = - \\frac{4}{3}\\) or \\(x = 2\\)\n(b) [Method 1] / Method 2 / Method 3 / Method 4.\n\\(x(3x + 4) = 2(x^{2} + 6)\\)\n\\(x^{2} + 4x - 12 = 0\\)\n\\((x + 6)(x - 2) = 0\\)\n\\(x = - 6\\) or \\(x = 2\\)\n(c) Method 1 / Method 2 / [Method 3] / Method 4.\n\\((3x - 4)^{2} = 4x^{2}\\)\n\\(3x - 4 = 2x\\) or \\(3x - 4 = - 2x\\)\n\\(x = 4\\) or \\(x = \\frac{4}{5}\\)\n(d) [Method 1] / Method 2 / Method 3 / Method 4.\n\\(x(3x - 4) = - 2(x^{2} - 6)\\)\n\\(5x^{2} - 4x - 12 = 0\\)\n\\(x = 2\\) or \\(x = - \\frac{6}{5}\\)\n(e) Method 1 / [Method 2] / Method 3 / Method 4.\n\\((x - 2)(x - 3) = (a - 2)(a - 3)\\)\n\\(x^{2} - 5x + 6 = a^{2} - 5a + 6\\)\n\\(x^{2} - a^{2} - 5x + 5a = 0\\)\n\\((x + a)(x - a) - 5(x - a) = 0\\)\n\\((x - a)(x + a - 5) = 0\\)\n\\(x = a\\) or \\(x = 5 - a\\)"
      },
      {
        id: "qe-1a-ex2",
        type: "Solving Quadratic Equations",
        question: "If \\(\\alpha\\) is a root of \\(2x^{2} - x - 28 = 0\\), then \\(6\\alpha^{2} - 3\\alpha - 88 =\\)\nA. \\(- 4.\\)\nB. \\(- 3.5.\\)\nC. \\(0.\\)\nD. \\(4.\\)",
        answer: "A",
        steps: "\\(2\\alpha^{2} - \\alpha - 28 = 0\\)\n\\(2\\alpha^{2} - \\alpha = 28\\) (A)\n\\(6\\alpha^{2} - 3\\alpha = 84\\)\n\\(6\\alpha^{2} - 3\\alpha - 88 = - 4\\)"
      },
      {
        id: "qe-1a-ex3",
        type: "Solving Quadratic Equations",
        question: "If \\(\\left\\{ \\begin{array}{r}\n8(a - 3) = 3a - a^{2} \\\\\n8(b - 3) = 3b - b^{2}\n\\end{array} \\right.\\ \\), where \\(a < b\\), find the values of \\(a - b\\).\nA. \\(- 11\\)\nB. \\(- 5\\)\nC. \\(5.\\)\nD. \\(11.\\)",
        answer: "A",
        steps: "Consider the expression as a quadratic equation:\n\\(8(x - 3) = 3x - x^{2}\\), where \\(a\\) and \\(b\\) are the roots of the equation.\nSimplifying,\n\\(x^{2} + 5x - 24 = 0\\)\n\\(x = - 8\\) or \\(x = 3\\)\n\\(\\therefore a = - 8,b = 3\\)\n\\(a - b = - 8 - 3 = - 11\\) (A)"
      },
      {
        id: "qe-1a-ex4",
        type: "Solving Quadratic Equations",
        question: "It is given that \\(- 4\\) is a root of the equation \\(x^{2} - kx - 6k^{2} = 0\\), where \\(k > 0\\). Find the other root of the equation \\(x^{2} - kx - 6k^{2} = 0\\).\nA. \\(2\\)\nB. \\(4\\)\nC. \\(6\\)\nD. \\(8\\)",
        answer: "C",
        steps: "\\(( - 4)^{2} - k( - 4) - 6k^{2} = 0\\)\n\\(16 + 4k - 6k^{2} = 0\\)\n\\(k = - \\frac{4}{3}\\) (rej.) or \\(k = 2\\) (C)\n\\(x^{2} - 2x - 24 = 0\\)\n\\(x = 6\\) or \\(x = - 4\\) (rej.)"
      },
      {
        id: "qe-1a-ex5",
        type: "Solving Quadratic Equations",
        question: "It is given that \\(p\\) is a non-zero root of the quadratic equation \\(x^{2} - px + q = 0\\). Which of the following is/are true?\nI. \\(q > 0\\)\nII. \\(q = 0\\)\nIII. Zero is the other root of the given quadratic equation.\nA. I only\nB. II only\nC. I and III only\nD. II and III only",
        answer: "D",
        steps: "\\(x^{2} - px + q = 0\\)\n\\((p)^{2} - p(p) + q = 0\\)\n\\(q = 0\\)\n\\(x^{2} - px + (0) = 0\\)\n\\(x(x - p) = 0\\) (D)\n\\(x = 0\\) or \\(x = p\\)"
      },
      {
        id: "qe-1a-ex6",
        type: "Solving Quadratic Equations",
        question: "Let \\(b\\) be a real number. If the equations \\(x^{2} - 2bx + 3 = 0\\) and \\(3x^{2} - bx - 21 = 0\\) have a common root \\(\\alpha\\), then \\(b =\\)\nA. \\(- 1\\) or \\(1.\\)\nB. \\(- 2\\) or \\(2.\\)\nC. \\(- 3\\) or \\(3.\\)\nD. \\(- 6\\) or \\(6.\\)",
        answer: "B",
        steps: "\\(\\alpha^{2} - 2b\\alpha + 3 = 0\\) and \\(3\\alpha^{2} - b\\alpha - 21 = 0\\)\n\\(3\\alpha^{2} - 6b\\alpha + 9 = 3\\alpha^{2} - b\\alpha - 21 = 0\\)\n\\(5b\\alpha = 30\\)\n\\(\\alpha b = 6\\)\n\\(b = \\frac{6}{\\alpha}\\)\n\\(\\alpha^{2} - 2\\left( \\frac{6}{\\alpha} \\right)\\alpha + 3 = 0\\)\n\\(\\alpha^{2} - 9 = 0\\)\n\\(\\alpha = 3\\) or \\(\\alpha = - 3\\)\n\\(b = 2\\) or \\(b = - 2\\) (B)"
      },
      {
        id: "qe-1a-ex7",
        type: "Solving Quadratic Equations",
        question: "[Challenging] It is given that \\(b\\) is a root of the equation \\(2b^{2} + cx - x^{2} = 0\\), where \\(b > 0\\). Find the other root of the equation \\(2b^{2} + cx - x^{2} = 0\\).\nA. \\(0\\)\nB. \\(- b\\)\nC. \\(2b\\)\nD. \\(- 2b\\)",
        answer: "D",
        steps: "\\(2b^{2} + cx - x^{2} = 0\\)\n\\(2b^{2} + bc - b^{2} = 0\\)\n\\(b^{2} + bc = 0\\)\n\\(b(b + c) = 0\\)\n\\(b = 0\\) (rej.) or \\(b = - c\\) (D)\n\\(2b^{2} + cx - x^{2} = 0\\)\n\\(2b^{2} + ( - b)x - x^{2} = 0\\)\n\\(x^{2} + bx - 2b^{2} = 0\\)\n\\((x - b)(x + 2b) = 0\\)\n\\(x = - 2b\\)"
      },
      {
        id: "qe-1a-ex8",
        type: "Solving Quadratic Equations",
        question: "[Challenging]\nIt is given that the equation \\(a^{2}x^{2} - 9ax + (20 - 3a - 9a^{2}) = 0\\) (where \\(a < 0\\)) has at least one integral root. Find the sum of all possible integral values of \\(a\\).\nA. \\(- 1\\)\nB. \\(- 11\\)\nC. \\(- 12\\)\nD. \\(- 16\\)",
        answer: "C",
        steps: "\\(x = \\frac{- ( - 9a) \\pm \\sqrt{( - 9a)^{2} - 4a^{2}(20 - 3a - 9a^{2})}}{2a^{2}}\\)\n\\(= \\frac{9a \\pm \\sqrt{a^{2} + 12a^{3} + 36a^{4}}}{2a^{2}}\\)\n\\(= \\frac{9a \\pm (a + 6a^{2})}{2a^{2}}\\)\n\\(= \\frac{5}{a} + 3\\) or \\(\\frac{4}{a} - 3\\)\nThe equation \\(a^{2}x^{2} - 9ax + (20 - 3a - 9a^{2}) = 0\\) (where \\(a < 0\\)) has at least one integral root.\nThe possible integral values of \\(a = - 1, - 2, - 4\\) or \\(- 5\\)\nSum of all possible integral values of \\(a = - 1 - 2 - 4 - 5 =\\) \\(- 12\\) (C)"
      },
      {
        id: "qe-1a-ex9",
        type: "Solving Quadratic Equations",
        question: "[DSE-2022-II-Q4]\nLet \\(c\\) be a constant. Solve the equation \\((x - c)(x - 4c) = (3c - x)(x - 4c)\\).\nA. \\(x = 2c\\) B. \\(x = 3c\\)\nC. \\(x = c\\) or \\(x = 3c\\) D. \\(x = 2c\\) or \\(x = 4c\\)",
        answer: "D",
        steps: "\\((x - c)(x - 4c) = (3c - x)(x - 4c)\\)\n\\((x - 4c)(x - c - 3c + x) = 0\\)\n\\((x - 4c)(2x - 4c) = 0\\)\n\\(x = 4c\\) or \\(x = 2c\\) (D)"
      },
      {
        id: "qe-1a-ex10",
        type: "Solving Quadratic Equations",
        question: "If \\((x - a)(a - 2x) = - a^{2}\\), where \\(a\\) is a constant, then\nA. \\(x = 0\\) or \\(x = \\frac{3a}{2}.\\)\nB. \\(x = 3a\\) or \\(x = - \\frac{a}{2}.\\)\nC. \\(x = 0\\) or \\(x = 2a.\\)\nD. \\(x = - \\frac{3a}{2}\\) or \\(x = \\frac{a}{2}.\\)",
        answer: "A",
        steps: "Method 1 (LQ):\n\\((x - a)(a - 2x) = - a^{2}\\)\n\\(xa - 2x^{2} - a^{2} + 2ax = - a^{2}\\)\n\\(- 2x^{2} + 3ax = 0\\)\n\\(x( - 2x + 3a) = 0\\)\n\\(x = 0\\) or \\(x = \\frac{3a}{2}\\)\nMethod 2 (MC):\nSubstitute \\(a = 2\\), the equation becomes \\((x - 2)(2 - 2x) = - 2^{2}\\),\nsolution becomes \\(x = 3\\) or \\(x = 0\\).\nBy checking the options, option A matches the substitution. (A)"
      },
      {
        id: "qe-1a-ex11",
        type: "Solving Quadratic Equations",
        question: "Solve the equation \\((x + 1)(x - 2) = (a + 1)(a - 2)\\).\nA. \\(x = - 1\\) or \\(x = 2\\)\nB. \\(x = a\\)\nC. \\(x = a\\) or \\(x = - a\\)\nD. \\(x = a\\) or \\(x = - a + 1\\)",
        answer: "D",
        steps: "Method 1 (LQ):\n\\(x^{2} - x - 2 = a^{2} - a - 2\\)\n\\(x^{2} - a^{2} - x + a = 0\\)\n\\((x + a)(x - a) - (x - a) = 0\\)\n\\((x - a)(x + a - 1) = 0\\)\n\\(x = a\\) or \\(x = 1 - a\\)\nMethod 2 (MC):\nSubstitute \\(a = 3\\), the equation becomes \\((x + 1)(x - 2) = 4\\),\nsolution becomes \\(x = - 2\\) or \\(x = 3\\).\nBy checking the options, option D matches the substitution. (D)"
      },
      {
        id: "qe-1a-ex12",
        type: "Solving Quadratic Equations",
        question: "[DSE-2024-II-Q7]\nLet \\(m\\) be a constant. Solve the equation \\(x^{2} - 3x = (m - 1)^{2} - 3(m - 1)\\).\nA. \\(x = m - 1\\) or \\(x = m - 4\\) B. \\(x = m - 1\\) or \\(x = 4 - m\\)\nC. \\(x = 1 - m\\) or \\(x = m - 4\\) D. \\(x = 1 - m\\) or \\(x = 4 - m\\)",
        answer: "B",
        steps: "Method 1 (LQ):\n\\(x^{2} - 3x = (m - 1)^{2} - 3(m - 1)\\)\n\\(x^{2} - (m - 1)^{2} - 3x + 3(m - 1) = 0\\)\n\\((x + m - 1)(x - m + 1) - 3(x - m + 1) = 0\\)\n\\((x - m + 1)(x + m - 4) = 0\\)\n\\(x = m - 1\\) or \\(x = 4 - m\\)\nMethod 2 (MC):\nWhen \\(m = 0\\), \\(x^{2} - 3x = 4 \\rightarrow x = 4\\) or \\(x = - 1\\)\nBy checking the options, Option B matches the substitution. (B)"
      },
      {
        id: "qe-1a-ex13",
        type: "Solving Quadratic Equations",
        question: "[WYK-2324-S6-Mock-II-Q9]\nLet \\(k\\) be a constant. Solve the equation \\((x + k)^{2} = 4k^{2} - 4k + 1\\).\nA. \\(x = 3k - 1\\) or \\(x = - k + 1\\) B. \\(x = 3k + 1\\) or \\(x = k + 1\\)\nC. \\(x = - 3k + 1\\) or \\(x = k - 1\\) D. \\(x = - 3k - 1\\) or \\(x = k + 1\\)",
        answer: "C",
        steps: "\\((x + k)^{2} = (2k - 1)^{2}\\)\n\\(x + k = 2k - 1\\) or \\(x + k = - (2k - 1)\\)\n\\(x = k - 1\\) or \\(x = - 3k + 1\\) (C)"
      },
      {
        id: "qe-1a-ex14",
        type: "Solving Quadratic Equations",
        question: "Let \\(h\\) and \\(k\\) be distinct real numbers. If \\((kx - h)^{2} = (hx - k)^{2}\\), then \\(x =\\)\nA. \\(1.\\) B. \\(- 1\\) or \\(1.\\)\nC. \\(h\\) or \\(- h.\\) D. \\(k\\) or \\(- k.\\)",
        answer: "B",
        steps: "\\(kx - h = hx - k\\) or \\(kx - h = - hx + k\\)\n\\(x(k - h) = h - k\\) or \\(x(k + h) = h + k\\)\n\\(x = - 1\\) or \\(x = 1\\) (B)"
      },
      {
        id: "qe-1a-ex15",
        type: "Solving Quadratic Equations",
        question: "[Challenging]\nLet \\(a,b\\) and \\(c\\) be real numbers. Solve the equation \\((x - b)(x - c) = (a - b)(a - c)\\).\nA. \\(x = a\\) B. \\(x = a\\) or \\(b + c.\\)\nC. \\(x = a\\) or \\(b + c - a.\\) D. \\(x = a\\) or \\(b + c + a.\\)",
        answer: "C",
        steps: "By substituting the options to the questions, C is the answer. (C)"
      },
      // ---- Chapter 1 B) Completing Square ----
      {
        id: "qe-1b-ex1",
        type: "Completing Square",
        question: "Complete squares for the following expressions.\n(a) \\(y = x^{2} - 6x + 8\\)\n(b) \\(y = b^{2} + 8b - 12\\)\n(c) \\(y = u^{2} - 20u\\)\n(d) \\(y = x^{2} - x + 2\\)\n(e) \\(y = x^{2} + 5x + 4\\)\n(f) \\(y = k^{2} - \\frac{2}{3}k + 1\\)",
        answer: "(a) \\(y = (x - 3)^{2} - 1\\)\n(b) \\(y = (b + 4)^{2} - 28\\)\n(c) \\(y = (u - 10)^{2} - 100\\)\n(d) \\(y = (x - 0.5)^{2} + 1.75\\)\n(e) \\(y = (x + 2.5)^{2} - 2.25\\)\n(f) \\(y = \\left( k - \\frac{1}{3} \\right)^{2} + \\frac{8}{9}\\)",
        steps: "(a) \\(y = x^{2} - 6x + 8 = x^{2} - 6x + 3^{2} - 3^{2} + 8 = (x - 3)^{2} - 1\\)\n(b) \\(y = b^{2} + 8b - 12 = b^{2} + 8b + 4^{2} - 4^{2} - 12 = (b + 4)^{2} - 28\\)\n(c) \\(y = u^{2} - 20u = u^{2} - 20u + 10^{2} - 10^{2} = (u - 10)^{2} - 100\\)\n(d) \\(y = x^{2} - x + 2 = x^{2} - x + 0.5^{2} - 0.5^{2} + 2 = (x - 0.5)^{2} + 1.75\\)\n(e) \\(y = x^{2} + 5x + 4 = x^{2} + 5x + 2.5^{2} - 2.5^{2} + 4 = (x + 2.5)^{2} - 2.25\\)\n(f) \\(y = k^{2} - \\frac{2}{3}k + 1 = k^{2} - \\frac{2}{3}k + \\left( \\frac{1}{3} \\right)^{2} - \\left( \\frac{1}{3} \\right)^{2} + 1 = \\left( k - \\frac{1}{3} \\right)^{2} + \\frac{8}{9}\\)"
      },
      {
        id: "qe-1b-ex2",
        type: "Completing Square",
        question: "Complete squares for the following expressions.\n(g) \\(y = - (2x + x^{2})\\)\n(h) \\(y = - a^{2} - 5a + 6\\)\n(i) \\(y = 3a^{2} - 18a + 28\\)\n(j) \\(y = - \\frac{1}{2}a^{2} - 4a - 30\\)\n(k) \\(y = \\frac{1}{3}p^{2} - 2p - 6\\)\n* (l) \\(y = - 3x^{2} + 6kx - 9k^{2} - 1\\), where \\(k\\) is a constant.\n** (m) \\(y = 2x^{2} - (4k + 4)x + (2 - 3k)\\), where \\(k\\) is a constant.",
        answer: "(g) \\(y = - (x + 1)^{2} + 1\\)\n(h) \\(y = - (a + 2.5)^{2} + 12.25\\)\n(i) \\(y = 3(a - 3)^{2} + 1\\)\n(j) \\(y = - \\frac{1}{2}(a + 4)^{2} - 22\\)\n(k) \\(y = \\frac{1}{3}(p - 3)^{2} - 9\\)\n(l) \\(y = - 3(x - k)^{2} - 6k^{2} - 1\\)\n(m) \\(y = 2(x - k - 1)^{2} - 2k^{2} - 7k\\)",
        steps: "(g) \\(y = - (2x + x^{2}) = - (x^{2} + 2x + 1 - 1) = - (x + 1)^{2} + 1\\)\n(h) \\(y = - a^{2} - 5a + 6 = - (a^{2} + 5a) + 6 = - (a^{2} + 5a + 2.5^{2} - 2.5^{2}) + 6 = - (a + 2.5)^{2} + 2.5^{2} + 6 = - (a + 2.5)^{2} + 12.25\\)\n(i) \\(y = 3a^{2} - 18a + 28 = 3(a^{2} - 6a) + 28 = 3(a^{2} - 6a + 3^{2} - 3^{2}) + 28 = 3(a - 3)^{2} - 27 + 28 = 3(a - 3)^{2} + 1\\)\n(j) \\(y = - \\frac{1}{2}a^{2} - 4a - 30 = - \\frac{1}{2}(a^{2} + 8a) - 30 = - \\frac{1}{2}(a^{2} + 8a + 4^{2} - 4^{2}) - 30 = - \\frac{1}{2}(a + 4)^{2} + 8 - 30 = - \\frac{1}{2}(a + 4)^{2} - 22\\)\n(k) \\(y = \\frac{1}{3}p^{2} - 2p - 6 = \\frac{1}{3}(p^{2} - 6p) - 6 = \\frac{1}{3}(p^{2} - 6p + 3^{2} - 3^{2}) - 6 = \\frac{1}{3}(p - 3)^{2} - 3 - 6 = \\frac{1}{3}(p - 3)^{2} - 9\\)\n(l) \\(y = - 3x^{2} + 6kx - 9k^{2} - 1 = - 3(x^{2} - 2kx) - 9k^{2} - 1 = - 3(x^{2} - 2kx + k^{2} - k^{2}) - 9k^{2} - 1 = - 3(x - k)^{2} + 3k^{2} - 9k^{2} - 1 = - 3(x - k)^{2} - 6k^{2} - 1\\)\n(m) \\(y = 2x^{2} - (4k + 4)x + (2 - 3k) = 2\\lbrack x^{2} - (2k + 2)x\\rbrack + (2 - 3k) = 2\\lbrack x^{2} - (2k + 2)x + (k + 1)^{2} - (k + 1)^{2}\\rbrack + (2 - 3k) = 2(x - k - 1)^{2} - 2(k + 1)^{2} + (2 - 3k) = 2(x - k - 1)^{2} - 2k^{2} - 7k\\)"
      },
      // ---- Chapter 2 A) Use of Discriminant ----
      {
        id: "qe-2a-ex1",
        type: "Use of Discriminant",
        question: "[Level 1]\nFor the equation \\(3x^{2} + (5k + 1)x + (k + 2k^{2}) = 0\\), prove that it has real roots for any real values of \\(k\\).",
        answer: "\\(\\Delta = (k - 1)^{2} \\geq 0\\), so the equation has real roots for any real values of \\(k\\).",
        steps: "\\(\\Delta = (5k + 1)^{2} - 4(3)(k + 2k^{2})\\)\n\\(= 25k^{2} + 10k + 1 - 12k - 24k^{2}\\)\n\\(= k^{2} - 2k + 1\\)\n\\(= (k - 1)^{2} \\geq 0\\)\n\\(\\therefore\\) The equation has real roots for any real values of \\(k\\)."
      },
      {
        id: "qe-2a-ex2",
        type: "Use of Discriminant",
        question: "[Level 1]\nFor the equation \\(x^{2} + (k - 6)x + k^{2} + 15 = 0\\), prove that it has no real roots for any real values of \\(k\\).",
        answer: "\\(\\Delta = - 3(k + 2)^{2} - 12 \\leq - 12 < 0\\), so the equation has no real roots for any real values of \\(k\\).",
        steps: "\\(\\Delta = (k - 6)^{2} - 4(1)(k^{2} + 15)\\)\n\\(= k^{2} - 12k + 36 - 4k^{2} - 60\\)\n\\(= - 3k^{2} - 12k - 24\\)\n\\(= - 3(k^{2} + 4k + 2^{2} - 2^{2}) - 24\\)\n\\(= - 3(k + 2)^{2} - 12 \\leq - 12 < 0\\)\n\\(\\therefore\\) The equation has no real roots for any real values of \\(k\\)."
      },
      {
        id: "qe-2a-ex3",
        type: "Use of Discriminant",
        question: "[Level 1]\nFor the equation \\(4kx^{2} + 7kx - 10x + 3k - 8 = 0\\), prove that it has two real roots for any real values of \\(k \\neq 0\\).",
        answer: "\\(\\Delta = (k - 6)^{2} + 64 \\geq 64 > 0\\), so the equation has real roots for any real values of \\(k \\neq 0\\).",
        steps: "\\(\\Delta = (7k - 10)^{2} - 4(4k)(3k - 8)\\)\n\\(= 49k^{2} - 140k + 100 - 48k^{2} + 128k\\)\n\\(= k^{2} - 12k + 100\\)\n\\(= k^{2} - 12k + 6^{2} - 6^{2} + 100\\)\n\\(= (k - 6)^{2} + 64 \\geq 64 > 0\\)\n\\(\\therefore\\) The equation has real roots for any real values of \\(k \\neq 0\\)."
      },
      {
        id: "qe-2a-ex4",
        type: "Use of Discriminant",
        question: "Quadratic equation \\((2x + 3)(kx - 2) = - 3\\) has two unequal real roots, which of the following is true?\nA. \\(k\\) can be any real number.\nB. \\(k\\) can be any real number greater than or equal to \\(0\\).\nC. \\(k\\) can be any real number except \\(0\\).\nD. \\(k\\) can be any real number except \\(\\frac{1}{2}\\).",
        answer: "C",
        steps: "Equation: \\(2kx^{2} + (3k - 4)x - 3 = 0\\)\n\\(\\Delta = (3k - 4)^{2} - 4(2k)( - 3)\\)\n\\(= 9k^{2} - 24k + 16 + 24k\\)\n\\(= 9k^{2} + 16 \\geq 16 > 0\\)\n\\(\\therefore\\) For any real number \\(k\\) except \\(0\\), the equation has \\(2\\) unequal real roots. (C)\n(Note that if \\(k = 0\\), the equation is no longer quadratic anymore.)"
      },
      {
        id: "qe-2a-ex5",
        type: "Use of Discriminant",
        question: "If \\(0 < p < 6\\), which of the following quadratic equations has/have two distinct real roots?\nI. \\((p^{2} + 1)x^{2} + (2p - 1)x + 1 = 0\\)\nII. \\(px^{2} - (p + 7)x + 7 = 0\\)\nIII. \\(\\frac{1}{2}x^{2} - 3px + 4p^{2} + 18 = 0\\)\nA. I only B. II only C. I and III only D. II and III only",
        answer: "B",
        steps: "For I, \\((p^{2} + 1)x^{2} + (2p - 1)x + 1 = 0\\): \\(\\Delta = (2p - 1)^{2} - 4(p^{2} + 1)(1) = - 4p - 3\\). \\(\\because 0 < p < 6\\therefore\\Delta < 0\\therefore\\) no real roots.\nFor II, \\(px^{2} - (p + 7)x + 7 = 0\\): \\(\\Delta = \\lbrack - (p + 7)\\rbrack^{2} - 4(p)(7) = p^{2} - 14p + 49 = (p - 7)^{2}\\). \\(\\because 0 < p < 6\\therefore\\Delta > 0\\therefore\\) two distinct real roots.\nFor III, \\(\\frac{1}{2}x^{2} - 3px + 4p^{2} + 18 = 0\\): \\(\\Delta = ( - 3p)^{2} - 4(\\frac{1}{2})(4p^{2} + 18) = p^{2} - 36\\). \\(\\because 0 < p < 6\\therefore\\Delta < 0\\therefore\\) no real roots.\n\\(\\therefore\\) Only II has two distinct real roots. (B)"
      },
      {
        id: "qe-2a-ex6",
        type: "Use of Discriminant",
        question: "Consider the equation \\(hx^{2} + h(k + 1)x + hk = 0\\), where \\(h < 0\\) and \\(k > 0\\). Which of the following must be true?\nI. The equation has unequal real roots.\nII. The equation has negative real root(s).\nIII. The equation has irrational root(s).\nA. I only B. II only C. I and III only D. II and III only",
        answer: "B",
        steps: "For I: \\(hx^{2} + h(k + 1)x + hk = 0\\Rightarrow x^{2} + (k + 1)x + k = 0\\ \\ \\cdots(*)\\). \\(\\Delta\\) of \\((*) = (k + 1)^{2} - 4(1)(k) = (k - 1)^{2}\\). When \\(k = 1,\\Delta = 0\\) (equal real roots). \\(\\therefore\\) I may not be true.\nFor II: \\((x + 1)(x + k) = 0\\Rightarrow x = - 1\\) or \\(x = - k < 0\\). \\(\\therefore\\) The equation has negative real root(s). \\(\\therefore\\) II must be true.\nFor III: \\(\\because k\\) can be rational or irrational. \\(\\therefore\\) III may not be true.\n\\(\\therefore\\) The answer is B. (B)"
      },
      {
        id: "qe-2a-ex7",
        type: "Use of Discriminant",
        question: "[Level 1]\n(a) Does the graph of \\(y = 2x^{2} + (2k - 5)x + k - 3\\) intersects the \\(x\\)-axis for any values of \\(k\\)? Explain your answer.\n(b) Hence, find the \\(x\\)-intercept(s) of the graph. Express your answers in terms of \\(k\\) when necessary.",
        answer: "(a) Yes. \\(\\Delta = (2k - 7)^{2} \\geq 0\\), so the graph always intersects the \\(x\\)-axis for any values of \\(k\\).\n(b) The \\(x\\)-intercepts are \\(- 0.5\\) and \\(3 - k\\).",
        steps: "(a) For the equation \\(2x^{2} + (2k - 5)x + k - 3 = 0\\),\n\\(\\Delta = (2k - 5)^{2} - 4(2)(k - 3) = 4k^{2} - 20k + 25 - 8k + 24 = 4k^{2} - 28k + 49 = (2k - 7)^{2} \\geq 0\\)\nThe graph always intersects the \\(x\\)-axis for any values of \\(k\\).\n(b) When \\(2x^{2} + (2k - 5)x + k - 3 = 0\\), \\(x = \\frac{- (2k - 5) \\pm \\sqrt{\\Delta}}{2(2)} = \\frac{5 - 2k + (2k - 7)}{2(2)}\\) or \\(\\frac{5 - 2k - (2k - 7)}{2(2)}\\)\n\\(x = - 0.5\\) or \\(3 - k\\). \\(x\\)-intercepts are \\(- 0.5\\) and \\(3 - k\\)."
      },
      {
        id: "qe-2a-ex8",
        type: "Use of Discriminant",
        question: "[Level 1]\nThe figure shows the graph of \\(y = \\frac{3}{8}x^{2} - 3x + k\\) which touches the \\(x\\)-axis at one point \\(R\\), and cuts the \\(y\\)-axis at \\(P\\).\n(a) (i) Find the value of \\(k\\).\n(a) (ii) Find the coordinates of \\(P\\) and \\(R\\).\n(b) Find the area of \\(\\bigtriangleup OPR\\).",
        images: [{ src: "images/qe-2a-ex8.png", width: 168 }],
        answer: "(a)(i) \\(k = 6\\)\n(a)(ii) \\(P = (0,6)\\), \\(R = (4,0)\\)\n(b) \\(12\\ sq.\\ units\\)",
        steps: "(a) (i) \\(\\because\\) The graph of \\(y = \\frac{3}{8}x^{2} - 3x + k\\) touches the \\(x\\)-axis at one point.\n\\(\\therefore\\) For the equation \\(\\frac{3}{8}x^{2} - 3x + k = 0\\), \\(\\Delta = 0\\)\ni.e. \\(( - 3)^{2} - 4\\left( \\frac{3}{8} \\right)(k) = 0\\Rightarrow 9 - \\frac{3}{2}k = 0\\Rightarrow k =\\) \\(6\\)\n(ii) Coordinates of \\(P =\\) \\((0,6)\\)\nBy substituting \\(k = 6\\) into \\(\\frac{3}{8}x^{2} - 3x + k = 0\\), we have \\(\\frac{3}{8}x^{2} - 3x + 6 = 0\\Rightarrow x^{2} - 8x + 16 = 0\\Rightarrow (x - 4)^{2} = 0\\Rightarrow x = 4\\). \\(\\therefore\\) Coordinates of \\(R =\\) \\((4,0)\\)\n(b) Area of \\(\\bigtriangleup OPR = \\frac{1}{2} \\times OP \\times OR = \\frac{1}{2} \\times (6 - 0) \\times (4 - 0)\\ sq.\\ units =\\) \\(12\\ sq.\\ units\\)"
      },
      {
        id: "qe-2a-ex9",
        type: "Use of Discriminant",
        question: "[Level 2]\nThe figure shows the graph of \\(y = x^{2} - 2mx + (k + 1)\\), where \\(m > 0\\). The graph touches the \\(x\\)-axis at the point \\(P\\), and it cuts the \\(y\\)-axis at the point \\(Q\\).\n(a) Express \\(k\\) in terms of \\(m\\).\n(b) Find, in terms of \\(m\\), the coordinates of (i) \\(Q\\), (ii) \\(P\\).\n(c) Find the values of \\(m\\) and \\(k\\) if\n(i) the area of \\(\\bigtriangleup OPQ\\) is \\(\\frac{27}{2}\\) square units,\n(ii) the length of \\(OQ\\) is \\(3\\) units longer than that of \\(OP\\). (Leave your answers in surd form.)",
        images: [{ src: "images/qe-2a-ex9.png", width: 168 }],
        answer: "(a) \\(k = m^{2} - 1\\)\n(b)(i) \\(Q = (0,m^{2})\\)\n(b)(ii) \\(P = (m,0)\\)\n(c)(i) \\(m = 3\\), \\(k = 8\\)\n(c)(ii) \\(m = \\frac{1 + \\sqrt{13}}{2}\\), \\(k = \\frac{5 + \\sqrt{13}}{2}\\)",
        steps: "(a) \\(\\Delta = 0\\Rightarrow ( - 2m)^{2} - 4(1)(k + 1) = 0\\Rightarrow m^{2} - (k + 1) = 0\\Rightarrow k =\\) \\(m^{2} - 1\\)\n(b) (i) \\(y = 0^{2} - 2m(0) + (k + 1) = k + 1 = m^{2}\\Rightarrow \\) Coordinates of \\(Q =\\) \\((0,m^{2})\\)\n(ii) \\(x\\)-coordinate of \\(P = \\frac{- ( - 2m)}{2(1)} = m\\Rightarrow \\) Coordinates of \\(P =\\) \\((m,0)\\)\n(c) (i) \\(\\frac{1}{2} \\times OP \\times OQ = \\frac{27}{2}\\Rightarrow \\frac{1}{2} \\times m \\times m^{2} = \\frac{27}{2}\\Rightarrow m^{3} = 27\\Rightarrow m =\\) \\(3\\), \\(k = 3^{2} - 1 =\\) \\(8\\)\n(ii) \\(m^{2} = m + 3\\Rightarrow m^{2} - m - 3 = 0\\Rightarrow m = \\frac{- ( - 1) \\pm \\sqrt{( - 1)^{2} - 4(1)( - 3)}}{2(1)} =\\) \\(\\frac{1 + \\sqrt{13}}{2}\\) or \\(\\frac{1 - \\sqrt{13}}{2}\\) (rej.)\n\\(k = \\left( \\frac{1 + \\sqrt{13}}{2} \\right)^{2} - 1 = \\frac{1 + 13 + 2\\sqrt{13} - 4}{4} =\\) \\(\\frac{5 + \\sqrt{13}}{2}\\)"
      },
      {
        id: "qe-2a-ex10",
        type: "Use of Discriminant",
        question: "Which of the following about the graph of \\(y = kx^{2} - 5x - k\\) (where \\(k \\neq 0\\)) must be true?\nI. The graph does not pass through the origin.\nII. The \\(y\\)-intercept of the graph is negative.\nIII. The graph has two \\(x\\)-intercepts.\nA. I and II only B. I and III only C. II and III only D. I, II and III",
        answer: "B",
        steps: "For I: By substituting \\(x = 0\\) into \\(y = kx^{2} - 5x - k\\), we have \\(y = k(0)^{2} - 5(0) - k = - k \\neq 0\\). \\(\\therefore\\) The graph does not pass through the origin. \\(\\therefore\\) I must be true.\nFor II: \\(\\because y - intercept = - k\\). \\(\\therefore\\) The \\(y\\)-intercept of the graph may be positive or negative. \\(\\therefore\\) II may not be true.\nFor III: For the equation \\(kx^{2} - 5x - k = 0\\), \\(\\Delta = ( - 5)^{2} - 4(k)( - k) = 25 + 4k^{2} > 0\\). \\(\\therefore\\) The graph of \\(y = kx^{2} - 5x - k\\) has two \\(x\\)-intercepts. \\(\\therefore\\) III must be true. (B)"
      },
      // ---- Chapter 2 B) Sum and Product of Roots ----
      {
        id: "qe-2b-ex1",
        type: "Sum and Product of Roots",
        question: "[Level 1]\nForm a quadratic equation in \\(x\\) whose roots are \\(1\\) larger than twice the roots of the equation \\(4(x^{2} - 2) = 2(8 + 3x)\\).",
        answer: "\\(x^{2} - 5x - 20 = 0\\)",
        steps: "\\(2x^{2} - 3x - 12 = 0\\). Let \\(\\alpha\\) and \\(\\beta\\) be the roots of \\(2x^{2} - 3x - 12 = 0\\). New roots: \\(2\\alpha + 1\\) and \\(2\\beta + 1\\).\n\\(\\alpha + \\beta = - \\frac{( - 3)}{2} = \\frac{3}{2}\\), \\(\\alpha\\beta = \\frac{- 12}{2} = - 6\\)\n\\((2\\alpha + 1) + (2\\beta + 1) = 2(\\alpha + \\beta) + 2 = 2\\left( \\frac{3}{2} \\right) + 2 = 5\\)\n\\((2\\alpha + 1)(2\\beta + 1) = 4\\alpha\\beta + 2(\\alpha + \\beta) + 1 = 4( - 6) + 2\\left( \\frac{3}{2} \\right) + 1 = - 20\\)\n\\(\\therefore\\) The required quadratic equation: \\(x^{2} - 5x + ( - 20) = 0\\Rightarrow x^{2} - 5x - 20 = 0\\)"
      },
      {
        id: "qe-2b-ex2",
        type: "Sum and Product of Roots",
        question: "[Level 1] [2023-WYK-S4-Midyear-P1-Q11]\nLet \\(\\alpha\\) and \\(\\beta\\) be the roots of the quadratic equation \\(x^{2} - 5x - 2 = 0\\), where \\(\\alpha < \\beta\\).\n(a) Without solving the equation, find the values of \\(\\alpha + \\beta\\), \\(\\alpha\\beta\\) and \\(\\alpha - \\beta\\).\n(b) Hence, form a quadratic equation in \\(t\\) with roots \\(\\alpha^{2}\\) and \\(- \\beta^{2}\\).",
        answer: "(a) \\(\\alpha + \\beta = 5\\), \\(\\alpha\\beta = - 2\\), \\(\\alpha - \\beta = - \\sqrt{33}\\)\n(b) \\(t^{2} + 5\\sqrt{33}t - 4 = 0\\)",
        steps: "(a) \\(\\alpha + \\beta = 5,\\alpha\\beta = - 2\\); \\(\\alpha - \\beta = - \\sqrt{(\\alpha + \\beta)^{2} - 4\\alpha\\beta} = - \\sqrt{(5)^{2} - 4( - 2)} = - \\sqrt{33}\\)\n(b) \\(\\alpha^{2} + ( - \\beta^{2}) = \\alpha^{2} - \\beta^{2} = (\\alpha + \\beta)(\\alpha - \\beta) = - 5\\sqrt{33}\\); \\(\\alpha^{2}( - \\beta^{2}) = - \\alpha^{2}\\beta^{2} = - ( - 2)^{2} = - 4\\)\nThe required equation: \\(t^{2} + 5\\sqrt{33}t - 4 = 0\\)."
      },
      {
        id: "qe-2b-ex3",
        type: "Sum and Product of Roots",
        question: "It is given that \\(x^{2} + mx + k^{2} = 0\\) has two distinct positive roots \\(\\alpha\\) and \\(\\beta\\) where \\(m\\) is a real number and \\(k\\) is a positive real number. Form a quadratic equation in \\(x\\) with roots \\(\\sqrt{\\alpha}\\) and \\(\\sqrt{\\beta}\\).",
        answer: "\\(x^{2} - x\\sqrt{2k - m} + k = 0\\)",
        steps: "\\(\\alpha + \\beta = - m,\\alpha\\beta = k^{2}\\)\n\\((\\sqrt{\\alpha} + \\sqrt{\\beta})^{2} = \\alpha + 2\\sqrt{\\alpha\\beta} + \\beta = - m + 2k\\Rightarrow \\sqrt{\\alpha} + \\sqrt{\\beta} = \\sqrt{2k - m}\\), and \\(\\sqrt{\\alpha}\\sqrt{\\beta} = k\\).\nThe required equation: \\(x^{2} - x\\sqrt{2k - m} + k = 0\\)."
      },
      {
        id: "qe-2b-ex4",
        type: "Sum and Product of Roots",
        question: "[Level 2] [2022-WYK-S4-Midyear-P1-Q14]\nLet \\(\\alpha\\) and \\(\\beta\\) be the roots of the equation \\(x^{2} - 10x + p = 0\\), where \\(p\\) is a non-zero constant. It is given that \\(\\frac{\\alpha}{\\beta} + \\frac{10}{\\alpha} = \\frac{23}{2}\\).\n(a) Find the value of \\(p\\).\n(b) Using the identity \\(x^{3} + y^{3} = (x + y)(x^{2} - xy + y^{2})\\), find the value of \\(\\alpha^{3} + \\beta^{3}\\).",
        answer: "(a) \\(p = 8\\)\n(b) \\(\\alpha^{3} + \\beta^{3} = 760\\)",
        steps: "(a) \\(\\alpha + \\beta = 10,\\alpha\\beta = p\\), \\(\\alpha^{2} - 10\\alpha + p = 0 \\Rightarrow \\alpha^{2} = 10\\alpha - p\\)\n\\(\\frac{\\alpha}{\\beta} + \\frac{10}{\\alpha} = \\frac{23}{2}\\Rightarrow \\frac{\\alpha^{2} + 10\\beta}{\\alpha\\beta} = \\frac{23}{2}\\Rightarrow \\frac{10\\alpha - p + 10\\beta}{p} = \\frac{23}{2}\\Rightarrow \\frac{10(10) - p}{p} = \\frac{23}{2}\\Rightarrow 200 - 2p = 23p\\Rightarrow p = 8\\)\n(b) \\(\\alpha^{3} + \\beta^{3} = (\\alpha + \\beta)(\\alpha^{2} - \\alpha\\beta + \\beta^{2}) = (10)\\lbrack(\\alpha + \\beta)^{2} - 3\\alpha\\beta\\rbrack = 10\\lbrack 10^{2} - 3(8)\\rbrack = 760\\)"
      },
      {
        id: "qe-2b-ex5",
        type: "Sum and Product of Roots",
        question: "[Level 2]\nLet \\(\\alpha\\) and \\(\\beta\\) be the roots of the equation \\(x^{2} - 2x - (m^{2} - m + 1) = 0\\), where \\(m\\) is a real number. By expressing \\((\\alpha - \\beta)^{2}\\) in terms of \\(m\\), find the minimum value of \\((\\alpha - \\beta)^{2}\\).",
        answer: "Minimum value \\(= 7\\)",
        steps: "\\(\\alpha + \\beta = 2,\\alpha\\beta = - (m^{2} - m + 1)\\)\n\\((\\alpha - \\beta)^{2} = (\\alpha + \\beta)^{2} - 4\\alpha\\beta = 2^{2} - 4(1)\\lbrack - (m^{2} - m + 1)\\rbrack = 4m^{2} + 4m + 8\\)\n\\(= 4\\left( m^{2} + m + \\left( \\frac{1}{2} \\right)^{2} \\right) - 4\\left( \\frac{1}{2} \\right)^{2} + 8 = 4\\left( m + \\frac{1}{2} \\right)^{2} + 7 \\geq 7\\). Minimum value \\(= 7\\)."
      },
      {
        id: "qe-2b-ex6",
        type: "Sum and Product of Roots",
        question: "[Level 2]\nConsider the quadratic equation \\(x^{2} - (2h - 3)x + (h^{2} - 3k + 1) = 0\\), where \\(h < 0 < k\\).\n(a) Express the discriminant of the equation in terms of \\(h\\) and \\(k\\). Hence, prove that the equation has two distinct real roots.\n(b) Let \\(\\alpha,\\beta\\) be the roots of the equation. (i) Express \\(\\alpha^{2} + \\beta^{2}\\) in terms of \\(h\\) and \\(k\\). (ii) If, in addition that \\(\\alpha^{2} + \\beta^{2} = 39 + 6k\\), find the value of \\(h\\).",
        answer: "(a) \\(\\Delta = 12k - 12h + 5\\). Since \\(k > h\\), \\(\\Delta > 0\\), so the equation has two distinct real roots.\n(b)(i) \\(\\alpha^{2} + \\beta^{2} = 2h^{2} - 12h + 6k + 7\\)\n(b)(ii) \\(h = - 2\\)",
        steps: "(a) \\(\\Delta = \\lbrack - (2h - 3)\\rbrack^{2} - 4(1)(h^{2} - 3k + 1) = 4h^{2} - 12h + 9 - 4h^{2} + 12k - 4 =\\) \\(12k - 12h + 5\\). \\(\\because k > h\\therefore\\Delta = 12k - 12h + 5 > 0\\). \\(\\therefore\\) The equation has two distinct real roots.\n(b) (i) \\(\\alpha + \\beta = 2h - 3,\\alpha\\beta = h^{2} - 3k + 1\\). \\(\\therefore\\alpha^{2} + \\beta^{2} = (\\alpha + \\beta)^{2} - 2\\alpha\\beta = (2h - 3)^{2} - 2(h^{2} - 3k + 1) =\\) \\(2h^{2} - 12h + 6k + 7\\)\n(ii) \\(2h^{2} - 12h + 6k + 7 = 39 + 6k\\Rightarrow 2h^{2} - 12h - 32 = 0\\Rightarrow h =\\) \\(- 2\\) or \\(h = 8\\) (rejected)"
      },
      {
        id: "qe-2b-ex7",
        type: "Sum and Product of Roots",
        question: "[Level 2]\nIf \\(\\alpha\\) and \\(\\beta\\) are the roots of the quadratic equation \\(x^{2} - 6x - k = 0\\) and \\(\\beta^{2} + 5\\alpha\\beta + 6\\alpha = 4\\), find the value of \\(k\\).",
        answer: "\\(k = 8\\)",
        steps: "\\(\\alpha + \\beta = 6,\\alpha\\beta = - k\\). \\(\\because\\beta\\) is the root of \\(x^{2} - 6x - k = 0\\therefore\\beta^{2} = 6\\beta + k\\).\n\\((6\\beta + k) + 5\\alpha\\beta + 6\\alpha = 4\\Rightarrow 6(\\alpha + \\beta) + 5\\alpha\\beta + k = 4\\Rightarrow 6(6) + 5( - k) + k = 4\\Rightarrow k =\\) \\(8\\)"
      },
      {
        id: "qe-2b-ex8",
        type: "Sum and Product of Roots",
        question: "[Level 3]\nIf \\(\\alpha\\) and \\(\\beta\\) are the roots of the equation of \\(x^{2} + 3x - 8 = 0\\), find the value of \\(\\beta^{3} + 3\\beta^{2} + 8\\alpha\\).",
        answer: "\\(- 24\\)",
        steps: "\\(x^{2} + 3x - 8 = 0\\Rightarrow \\beta^{2} + 3\\beta = 8\\therefore\\beta^{3} + 3\\beta^{2} = 8\\beta\\).\n\\(\\beta^{3} + 3\\beta^{2} + 8\\alpha = 8\\beta + 8\\alpha = 8( - 3) = - 24\\)"
      },
      {
        id: "qe-2b-ex9",
        type: "Sum and Product of Roots",
        question: "If \\(k < 0\\), then the quadratic equation \\(x^{2} - x + 6k = 0\\) has\nA. a double real root. B. no real roots.\nC. two negative roots. D. a positive root and a negative root.",
        answer: "D",
        steps: "For \\(x^{2} - x + 6k = 0\\), \\(\\Delta = ( - 1)^{2} - 4(1)(6k) = 1 - 24k > 0\\) (since \\(k < 0\\)), so two distinct real roots. Also \\(\\alpha\\beta = 6k < 0\\therefore\\) one positive and one negative root. (D)"
      },
      {
        id: "qe-2b-ex10",
        type: "Sum and Product of Roots",
        question: "If \\(m > n\\) and \\(\\left\\{ \\begin{array}{r}\nm^{2} = 2(2 - m) \\\\\nn^{2} = 2(2 - n)\n\\end{array} \\right.\\ \\), then \\(m^{2} - n^{2} =\\)\nA. \\(20.\\) B. \\(4\\sqrt{5}\\) C. \\(- 4\\sqrt{5}\\) D. \\(- 4\\sqrt{5}\\) or \\(4\\sqrt{5}\\)",
        answer: "C",
        steps: "Rewrite the equation: \\(x^{2} + 2x - 4 = 0\\), where roots are \\(m\\) and \\(n\\). \\(m + n = - 2,mn = - 4\\).\n\\(m^{2} - n^{2} = (m + n)(m - n) = ( - 2)\\sqrt{(m + n)^{2} - 4mn} = - 2\\sqrt{( - 2)^{2} - 4( - 4)} = - 4\\sqrt{5}\\) (C)"
      },
      {
        id: "qe-2b-ex11",
        type: "Sum and Product of Roots",
        question: "[2526-WYK-S4-Final-P2-Q36]\nLet \\(\\alpha\\) and \\(\\beta\\) be the roots of the quadratic equation \\(x^{2} + mx - 35 = 0\\), where \\(m\\) is a constant. If \\(\\alpha^{2} - m\\beta = 39\\), then \\(m =\\)\nA. \\(2.\\) B. \\(4.\\) C. \\(- 2\\) or \\(2.\\) D. \\(- 4\\) or \\(4.\\)",
        answer: "C",
        steps: "\\(\\alpha + \\beta = - m,\\alpha\\beta = - 35\\). \\(\\because\\alpha^{2} + m\\alpha - 35 = 0\\therefore\\alpha^{2} = 35 - m\\alpha\\).\n\\(35 - m\\alpha - m\\beta = 39\\Rightarrow - m(\\alpha + \\beta) = 4\\Rightarrow - m( - m) = 4\\Rightarrow m = 2\\) or \\(m = - 2\\) (C)\nAlternative: By substituting each option: when \\(m = 2\\), roots are \\(5\\) and \\(- 7\\), \\(5^{2} - 2( - 7) = 39\\). Test \\(m = - 2\\) to identify C."
      },
      {
        id: "qe-2b-ex12",
        type: "Sum and Product of Roots",
        question: "If the roots of the equation \\(4x^{2} + 7x - b = 0\\) are \\(\\alpha\\) and \\(\\beta\\), where \\(b \\neq 0\\), then \\(- \\frac{8\\alpha}{4\\beta + 7} =\\)\nA. \\(1.\\) B. \\(2.\\) C. \\(- 1.\\) D. \\(- 2.\\)",
        answer: "B",
        steps: "\\(\\alpha\\beta = - \\frac{b}{4} \\neq 0\\). \\(\\because 4\\beta^{2} + 7\\beta - b = 0\\Rightarrow 4\\beta + 7 = \\frac{b}{\\beta}\\).\n\\(- \\frac{8\\alpha}{4\\beta + 7} = - \\frac{8\\alpha}{\\frac{b}{\\beta}} = - \\frac{8\\alpha\\beta}{b} = - \\frac{8\\left( - \\frac{b}{4} \\right)}{b} = 2\\) (B)\nAlternative: Substitute \\(b = 2,\\alpha = 0.25,\\beta = - 2\\): \\(- \\frac{8(0.25)}{4( - 2) + 7} = 2\\)."
      },
      {
        id: "qe-2b-ex13",
        type: "Sum and Product of Roots",
        question: "[Challenging]\nIf \\(\\left\\{ \\begin{array}{r}\n\\alpha^{2} + 5\\alpha - k = 0 \\\\\n\\beta^{2} - 5\\beta - k = 0\n\\end{array} \\right.\\ \\) where \\(\\alpha > \\beta > 0\\), find the value of \\(\\alpha^{2} - \\beta^{2}\\).\nA. \\(5\\sqrt{25 - 4k}\\) B. \\(5\\sqrt{25 + 4k}\\) C. \\(- 5\\sqrt{25 - 4k}\\) D. \\(- 5\\sqrt{25 + 4k}\\)",
        answer: "B",
        steps: "\\(x^{2} + 5x - k = 0\\) with roots \\(\\alpha\\) and \\(- \\beta\\). \\(\\alpha + ( - \\beta) = 5,\\alpha( - \\beta) = - k\\).\n\\(\\therefore\\alpha + \\beta = \\sqrt{(\\alpha - \\beta)^{2} + 4\\alpha\\beta} = \\sqrt{5^{2} + 4k}\\). \\(\\alpha^{2} - \\beta^{2} = (\\alpha + \\beta)(\\alpha - \\beta) = 5\\sqrt{25 + 4k}\\) (B)"
      },
      {
        id: "qe-2b-ex14",
        type: "Sum and Product of Roots",
        question: "[2526-WYK-S4-Midyear-P2-Q45-Challenging]\nLet \\(a,b,c\\) and \\(d\\) be \\(4\\) distinct real numbers. It is given that \\(a\\) and \\(b\\) are the roots of the quadratic equation \\(x^{2} - 10cx - 11d = 0\\), and \\(c\\) and \\(d\\) are the roots of the quadratic equation \\(x^{2} - 10ax - 11b = 0\\). Find the value of \\(a + b + c + d\\).\nA. \\(11.\\) B. \\(- 11.\\) C. \\(121\\) D. \\(1210.\\)",
        answer: "D",
        steps: "\\(a + b = 10c,c + d = 10a,ab = - 11d,cd = - 11b\\). We have \\(a + b + c + d = 10(a + c)\\) and \\(ac = 121\\).\n\\(a^{2} - 10ac - 11d = 0\\) and \\(c^{2} - 10ac - 11b = 0\\Rightarrow a^{2} - c^{2} = 11(d - b)\\Rightarrow (a + c)(a - c) = 11\\lbrack(10a - c) - (10c - a)\\rbrack = 121(a - c)\\)\n\\((a - c)(a + c - 121) = 0\\Rightarrow a + c = 121\\) (since \\(a,b,c,d\\) are distinct). \\(a + b + c + d = 10 \\times 121 = 1210\\) (D)"
      },
      {
        id: "qe-2b-ex15",
        type: "Sum and Product of Roots",
        question: "[Level 2]\nThe figure shows the graph of \\(y = - x^{2} + (k + 3)x + (k + 10)\\), where \\(k > 0\\). It cuts the \\(x\\)-axis at the points \\(A(\\alpha,0)\\) and \\(B(\\beta,0)\\), and cuts the \\(y\\)-axis at the point \\(C\\). \\(M\\) is the mid-point of \\(AB\\).\n(a) Find the coordinates of \\(C\\) in terms of \\(k\\).\n(b) Find, in terms of \\(k\\), \\(\\alpha + \\beta\\), \\(\\alpha\\beta\\) and \\((\\alpha - \\beta)^{2}\\).\n(c) Find the coordinates of \\(M\\) in terms of \\(k\\).\n(d) If \\(OC = 3OM\\), find the value of \\(k\\). Hence, using the result of (b), find the area of \\(\\bigtriangleup ABC\\) and leave your answer in surd form.",
        images: [{ src: "images/qe-2b-ex15.png", width: 168 }],
        answer: "(a) \\(C = (0,k + 10)\\)\n(b) \\(\\alpha + \\beta = k + 3\\), \\(\\alpha\\beta = - k - 10\\), \\((\\alpha - \\beta)^{2} = k^{2} + 10k + 49\\)\n(c) \\(M = \\left( \\frac{k + 3}{2},0 \\right)\\)\n(d) \\(k = 11\\); area of \\(\\bigtriangleup ABC = 21\\sqrt{70}\\ sq.\\ units\\)",
        steps: "(a) Coordinates of \\(C = (0,k + 10)\\)\n(b) Consider \\(- x^{2} + (k + 3)x + (k + 10) = 0\\): \\(\\alpha + \\beta =\\) \\(k + 3\\); \\(\\alpha\\beta =\\) \\(- k - 10\\)\n\\((\\alpha - \\beta)^{2} = (\\alpha + \\beta)^{2} - 4\\alpha\\beta = (k + 3)^{2} - 4( - k - 10) =\\) \\(k^{2} + 10k + 49\\)\n(c) Coordinates of \\(M = \\left( \\frac{\\alpha + \\beta}{2},0 \\right) =\\) \\(\\left( \\frac{k + 3}{2},0 \\right)\\)\n(d) \\(\\because OC = 3OM\\Rightarrow k + 10 = 3\\left( \\frac{k + 3}{2} \\right)\\Rightarrow k =\\) \\(11\\)\nArea of \\(\\bigtriangleup ABC = \\frac{1}{2} \\times AB \\times OC = \\frac{1}{2} \\times (\\beta - \\alpha) \\times (11 + 10) = \\frac{1}{2} \\times \\sqrt{11^{2} + 10(11) + 49} \\times 21 =\\) \\(21\\sqrt{70}\\ sq.\\ units\\)"
      },
      {
        id: "qe-2b-ex16",
        type: "Sum and Product of Roots",
        question: "[Level 2]\nIn the figure, the graph of \\(y = - x^{2} + (k - 3)x + (k + 2)\\), where \\(k > 0\\), cuts the \\(y\\)-axis at the point \\(S\\), and it cuts the \\(x\\)-axis at the points \\(P(\\alpha,0)\\) and \\(Q(\\beta,0)\\)\n(a) Find the coordinates of \\(S\\) in terms of \\(k\\).\n(b) Express \\(\\alpha + \\beta\\) and \\(\\alpha\\beta\\) in terms of \\(k\\). Hence, express \\((\\alpha - \\beta)^{2}\\) in terms of \\(k\\).\n(c) It is given that \\(RST\\) is a straight line and \\(PQRT\\) is a square. (i) Using the results of (a) and (b), or otherwise, find the value of \\(k\\). (ii) Hence, find the values of \\(\\alpha\\) and \\(\\beta\\).",
        images: [{ src: "images/qe-2b-ex16.png", width: 173 }],
        answer: "(a) \\(S = (0,k + 2)\\)\n(b) \\(\\alpha + \\beta = k - 3\\), \\(\\alpha\\beta = - k - 2\\), \\((\\alpha - \\beta)^{2} = k^{2} - 2k + 17\\)\n(c)(i) \\(k = \\frac{13}{6}\\)\n(c)(ii) \\(\\alpha = - \\frac{5}{2}\\), \\(\\beta = \\frac{5}{3}\\)",
        steps: "(a) When \\(x = 0,y = k + 2\\therefore\\) Coordinates of \\(S = (0,k + 2)\\)\n(b) Consider \\(- x^{2} + (k - 3)x + (k + 2) = 0\\): \\(\\alpha + \\beta =\\) \\(k - 3\\), \\(\\alpha\\beta =\\) \\(- k - 2\\)\n\\((\\alpha - \\beta)^{2} = (\\alpha + \\beta)^{2} - 4\\alpha\\beta = (k - 3)^{2} - 4( - k - 2) =\\) \\(k^{2} - 2k + 17\\)\n(c) (i) \\(\\because PQRT\\) is a square \\(\\therefore PQ = OS\\Rightarrow PQ^{2} = OS^{2}\\Rightarrow (\\beta - \\alpha)^{2} = (k + 2)^{2}\\Rightarrow k^{2} - 2k + 17 = k^{2} + 4k + 4\\Rightarrow 13 = 6k\\Rightarrow k =\\) \\(\\frac{13}{6}\\)\n(ii) \\(- x^{2} + \\left( \\frac{13}{6} - 3 \\right)x + \\left( \\frac{13}{6} + 2 \\right) = 0\\Rightarrow 6x^{2} + 5x - 25 = 0\\Rightarrow x = - \\frac{5}{2}\\) or \\(x = \\frac{5}{3}\\therefore\\alpha =\\) \\(- \\frac{5}{2}\\)\\(,\\beta =\\) \\(\\frac{5}{3}\\)"
      },
      {
        id: "qe-2b-ex17",
        type: "Sum and Product of Roots",
        question: "It is given that the graph of \\(y = ax^{2} + bx + c\\) has one negative \\(x\\)-intercept and one positive \\(x\\)-intercept. Which of the following must be true?\nI. \\(b^{2} - 4ac > 0\\) II. \\(\\frac{b}{a} > 0\\) III. \\(\\frac{c}{a} < 0\\)\nA. I only B. II only C. I and III only D. II and III only",
        answer: "C",
        steps: "When \\(ax^{2} + bx + c = 0\\), I: Since the equation has two different roots, I is true. II: The sum of a positive and negative number can be positive or negative (undetermined). III: The product of a positive and negative number must be negative (\\(\\frac{c}{a} < 0\\)). (C)"
      },
      // ---- Chapter 2 C) Complex Numbers ----
      {
        id: "qe-2c-ex1",
        type: "Complex Numbers",
        question: "[Level 1] [2425-WYK-S4-Mid-year-I-Q13]\nLet \\(a\\) be a real number.\n(a) Simplify and express \\(\\frac{a + 5i}{a - 3i}\\) in the form \\(c + di\\), where \\(c\\) and \\(d\\) are real numbers.\n(b) If the sum of the real part and imaginary part of \\(\\frac{a + 5i}{a - 3i}\\) is \\(- \\frac{3}{5}\\), find the values of \\(a\\).",
        answer: "(a) \\(\\frac{a^{2} - 15}{a^{2} + 9} + \\frac{8a}{a^{2} + 9}i\\)\n(b) \\(a = - 6\\) or \\(a = 1\\)",
        steps: "(a) \\(\\frac{a + 5i}{a - 3i} = \\frac{a + 5i}{a - 3i} \\times \\frac{a + 3i}{a + 3i} = \\frac{a^{2} + 3ai + 5ai + 15i^{2}}{a^{2} - 9i^{2}} = \\frac{a^{2} - 15}{a^{2} + 9} + \\frac{8a}{a^{2} + 9}i\\)\n(b) \\(\\frac{a^{2} - 15}{a^{2} + 9} + \\frac{8a}{a^{2} + 9} = - \\frac{3}{5}\\Rightarrow 5(a^{2} - 15 + 8a) = - 3(a^{2} + 9)\\Rightarrow 8a^{2} + 40a - 48 = 0\\Rightarrow a = - 6\\) or \\(a = 1\\)"
      },
      {
        id: "qe-2c-ex2",
        type: "Complex Numbers",
        question: "[Level 2]\nLet \\(n\\) be a non-negative real number.\n(a) Simplify \\(\\frac{1}{\\sqrt{- (n + 1)} - \\sqrt{- n}}\\) for non-negative \\(n\\).\n(b) Using the results of (a), simplify \\(\\frac{2}{\\sqrt{- 2} - \\sqrt{- 1}} - \\frac{2}{\\sqrt{- 3} - \\sqrt{- 2}} + \\frac{2}{\\sqrt{- 4} - \\sqrt{- 3}}\\cdots + \\frac{2}{\\sqrt{- 24} - \\sqrt{- 23}} - \\frac{2}{\\sqrt{- 25} - \\sqrt{- 24}}\\).",
        answer: "(a) \\(( - \\sqrt{n + 1} - \\sqrt{n})i\\)\n(b) \\(8i\\)",
        steps: "(a) \\(\\frac{1}{\\sqrt{- (n + 1)} - \\sqrt{- n}} \\times \\frac{\\sqrt{- (n + 1)} + \\sqrt{- n}}{\\sqrt{- (n + 1)} + \\sqrt{- n}} = \\frac{(\\sqrt{n + 1} + \\sqrt{n})i}{- 1} = ( - \\sqrt{n + 1} - \\sqrt{n})i\\)\n(b) \\(= 2\\lbrack( - \\sqrt{2} - \\sqrt{1})i - ( - \\sqrt{3} - \\sqrt{2})i + ( - \\sqrt{4} - \\sqrt{3})i + \\ldots + ( - \\sqrt{24} - \\sqrt{23})i - ( - \\sqrt{25} - \\sqrt{24})i\\rbrack = 2( - i + \\sqrt{25}i) = 8i\\)"
      },
      {
        id: "qe-2c-ex3",
        type: "Complex Numbers",
        question: "If \\(3 - i\\) is a root of \\(x^{2} + bx + c = 0\\), then\nA. \\(b = 3\\) and \\(c = - 19.\\) B. \\(b = - 3\\) and \\(c = 17.\\) C. \\(b = - 6\\) and \\(c = - 26.\\) D. \\(b = - 6\\) and \\(c = 10.\\)",
        answer: "D",
        steps: "\\(3 + i\\) is another root of \\(x^{2} + bx + c = 0\\). \\(- b = (3 + i) + (3 - i)\\Rightarrow b = - 6\\); \\(c = (3 + i)(3 - i) = 10\\). (D)"
      },
      {
        id: "qe-2c-ex4",
        type: "Complex Numbers",
        question: "[2020-DSE-II-Q37]\nDefine \\(z_{1} = \\frac{2 + ki}{1 + i}\\) and \\(z_{2} = \\frac{k + 5i}{2 - i}\\), where \\(k\\) is a real number. If the imaginary part of \\(z_{1}\\) is equal to the imaginary part of \\(z_{2}\\), then \\(z_{1} - z_{2} =\\)\nA. \\(- 20\\) B. \\(0\\) C. \\(3\\) D. \\(10\\)",
        answer: "D",
        steps: "\\(z_{1} = \\frac{(2 + ki)(1 - i)}{2} = \\frac{2 + k}{2} + \\frac{k - 2}{2}i\\); \\(z_{2} = \\frac{(k + 5i)(2 + i)}{5} = \\frac{2k - 5}{5} + \\frac{k + 10}{5}i\\).\n\\(\\frac{k - 2}{2} = \\frac{k + 10}{5}\\Rightarrow 5k - 10 = 2k + 20\\Rightarrow k = 10\\). Then \\(z_{1} = 6 + 4i,z_{2} = - 4 + 4i\\Rightarrow z_{1} - z_{2} = 10\\). (D)"
      },
      {
        id: "qe-2c-ex5",
        type: "Complex Numbers",
        question: "[Level 2]\nLet \\(z_{1} = \\frac{1}{2} - \\frac{1}{6}i\\) and \\(z_{2} = - \\frac{1}{6} + \\frac{1}{2}i\\).\n(a) Evaluate \\((z_{1} - z_{2})^{2}\\).\n(b) If \\(p(z_{1} - z_{2})^{4} + \\frac{q}{z_{1}z_{2}} = - 64 - 576i\\), where \\(p\\) and \\(q\\) are real numbers, find \\(p\\) and \\(q\\).",
        answer: "(a) \\((z_{1} - z_{2})^{2} = - \\frac{8}{9}i\\)\n(b) \\(p = 81\\), \\(q = 160\\)",
        steps: "(a) \\((z_{1} - z_{2})^{2} = \\left( \\frac{1}{2} - \\frac{1}{6}i + \\frac{1}{6} - \\frac{1}{2}i \\right)^{2} = \\left( \\frac{2}{3} - \\frac{2}{3}i \\right)^{2} = \\frac{4}{9}( - 2i) = - \\frac{8}{9}i\\)\n(b) \\(p(z_{1} - z_{2})^{4} = p\\left( - \\frac{8}{9}i \\right)^{2} = - \\frac{64}{81}p\\); \\(\\frac{q}{z_{1}z_{2}} = \\frac{q}{\\frac{5}{18}i} = - \\frac{18q}{5}i\\).\n\\(- \\frac{64}{81}p - \\frac{18q}{5}i = - 64 - 576i\\Rightarrow p = 81,q = 160\\)."
      },
      {
        id: "qe-2c-ex6",
        type: "Complex Numbers",
        question: "[Level 2]\nLet \\(z = (4x + 7) + (9 - x)i\\) be a complex number, where \\(x\\) is a real number. Find the value of \\(x\\) that\n(a) \\(zi\\) is a real number,\n(b) \\(\\frac{z}{1 + i}\\) is a purely imaginary number.",
        answer: "(a) \\(x = - \\frac{7}{4}\\)\n(b) \\(x = - \\frac{16}{3}\\)",
        steps: "(a) \\(zi = \\lbrack(4x + 7) + (9 - x)i\\rbrack i = (x - 9) + (4x + 7)i\\). Since \\(zi\\) is real, \\(4x + 7 = 0\\Rightarrow x =\\) \\(- \\frac{7}{4}\\)\n(b) \\(\\frac{z}{1 + i} = \\frac{(4x + 7) + (9 - x)i}{1 + i} \\times \\frac{1 - i}{1 - i} = \\frac{3x + 16}{2} + \\frac{2 - 5x}{2}i\\).\nFor purely imaginary, \\(\\frac{3x + 16}{2} = 0\\) and \\(\\frac{2 - 5x}{2} \\neq 0\\Rightarrow x =\\) \\(- \\frac{16}{3}\\)"
      },
      {
        id: "qe-2c-ex7",
        type: "Complex Numbers",
        question: "[Level 3]\nLet \\(z = a + bi\\), where \\(a\\) and \\(b\\) are real numbers. Denote the conjugate of \\(z\\) by \\(\\overline{z}\\).\n(a) Express \\(\\overline{z}\\) in terms of \\(a\\) and \\(b\\).\n(b) Suppose \\(\\alpha\\) and \\(\\beta\\) are two fixed complex numbers such that \\(\\alpha z + \\beta\\overline{z}\\) is a real number. Is \\(\\alpha + \\beta\\) a real number, a purely imaginary number, or a complex number? Explain your answer.",
        answer: "(a) \\(\\overline{z} = a - bi\\)\n(b) \\(\\alpha + \\beta\\) is a real number.",
        steps: "(a) \\(\\overline{z} = a - bi\\)\n(b) Let \\(\\alpha = c + di\\) and \\(\\beta = p + qi\\) (\\(c,d,p,q \\in \\mathbf{R}\\)). \\(\\alpha z + \\beta\\overline{z} = (ac + ap - bd + bq) + (ad + bc + aq - bp)i\\).\nSince \\(\\alpha z + \\beta\\overline{z}\\) is real for any \\(z\\), \\(a(d + q) + b(c - p) = 0\\Rightarrow d + q = 0\\) and \\(c - p = 0\\Rightarrow c = p,d = - q\\).\nWe have \\(\\alpha + \\beta = (c + di) + (p + qi) = 2c\\), which is a real number."
      },
      {
        id: "qe-2c-ex8",
        type: "Complex Numbers",
        question: "Find the values of the real numbers \\(a\\) and \\(b\\) if \\(\\frac{1 - 3i}{a - bi} = - 1 - i\\).\nA. \\(a = 1,b = - 2\\) B. \\(a = 1,b = 2\\) C. \\(a = 2,b = - 1\\) D. \\(a = 2,b = 1\\)",
        answer: "A",
        steps: "\\(1 - 3i = (a - bi)( - 1 - i) = ( - a - b) + (b - a)i\\Rightarrow \\left\\{ \\begin{array}{r}\n - a - b = 1 \\\\\nb - a = - 3\n\\end{array} \\right.\\ \\Rightarrow a =\\) \\(1\\) and \\(b =\\) \\(- 2\\) (A)"
      },
      {
        id: "qe-2c-ex9",
        type: "Complex Numbers",
        question: "If \\(x\\) and \\((x + 7)i - \\frac{xi}{3 + i}\\) are real numbers, then \\(x =\\)\nA. \\(10.\\) B. \\(7.\\) C. \\(- 7.\\) D. \\(- 10.\\)",
        answer: "D",
        steps: "\\((x + 7)i - \\frac{xi}{3 + i} \\times \\frac{3 - i}{3 - i} = - \\frac{x}{10} + \\left( \\frac{7x}{10} + 7 \\right)i\\). \\(\\frac{7x}{10} + 7 = 0\\Rightarrow x =\\) \\(- 10\\) (D)\nAlternative: Substitute each option into \\((x + 7)i - \\frac{xi}{3 + i}\\) to see if there is any imaginary part."
      },
      {
        id: "qe-2c-ex10",
        type: "Complex Numbers",
        question: "[Challenging]\nLet \\(a\\) and \\(b\\) be positive real numbers. If \\(\\sqrt{7 + 24i} = \\sqrt{a} + \\sqrt{b}i\\), then \\(b =\\)\nA. \\(9.\\) B. \\(12.\\) C. \\(16.\\) D. \\(22.\\)",
        answer: "A",
        steps: "\\(7 + 24i = (\\sqrt{a} + \\sqrt{b}i)^{2} = (a - b) + 2\\sqrt{ab}i\\Rightarrow a - b = 7\\) and \\(2\\sqrt{ab} = 24\\Rightarrow a = b + 7\\) and \\(ab = 144\\).\n\\((b + 7)b = 144\\Rightarrow (b - 9)(b + 16) = 0\\Rightarrow b =\\) \\(9\\) or \\(b = - 16\\) (rej.) (A)"
      },
      {
        id: "qe-2c-ex11",
        type: "Complex Numbers",
        question: "[Level 1] [2324-WYK-S6-Mock-I-Q15]\n(a) Express \\(\\frac{k^{2} - 1 - ki}{k + (k^{2} - 1)i}\\) in the form of \\(a + bi\\), where \\(a,b\\) and \\(k\\) are real numbers.\n(b) Hence simplify \\((2 - 5i)\\left\\lbrack \\frac{k^{2} - 1 - ki}{k + (k^{2} - 1)i} \\right\\rbrack^{2023}\\).",
        answer: "(a) \\(- i\\)\n(b) \\(5 + 2i\\)",
        steps: "(a) \\(\\frac{(k^{2} - 1) - ki}{k + (k^{2} - 1)i} = \\frac{a - bi}{b + ai} = \\frac{- i(b + ai)}{b + ai} = - i\\)\n(b) \\((2 - 5i)( - i)^{2023} = (2 - 5i)(i) = 5 + 2i\\)"
      },
      {
        id: "qe-2c-ex12",
        type: "Complex Numbers",
        question: "[Level 2] [2324-WYK-S4-Mid-year-I-Q12]\n(a) Simplify \\(\\frac{a - bi}{b + ai}\\), where \\(a\\) and \\(b\\) are real constants.\n(b) Find the values of \\(x\\) and \\(y\\) if \\((x + y)(2 - i) - y = \\left( \\frac{a - bi}{b + ai} \\right)^{2023}\\), where \\(x\\) and \\(y\\) are real constants.",
        answer: "(a) \\(- i\\)\n(b) \\(x = 1\\), \\(y = - 2\\)",
        steps: "(a) \\(\\frac{a - bi}{b + ai} \\times \\frac{b - ai}{b - ai} = \\frac{ab - a^{2}i - b^{2}i - ab}{b^{2} + a^{2}} = - i\\)\n(b) L.H.S. \\(= (2x + y) + ( - x - y)i\\), R.H.S. \\(= ( - i)^{2023} = i\\Rightarrow \\left\\{ \\begin{array}{r}\n2x + y = 0 \\\\\nx + y = - 1\n\\end{array} \\right.\\ \\Rightarrow x = 1,y = - 2\\)"
      },
      {
        id: "qe-2c-ex13",
        type: "Complex Numbers",
        question: "[Level 3]\nExpress the following in the form of \\(a + bi\\), where \\(a\\) and \\(b\\) are real numbers.\n(a) \\(\\left( \\frac{\\sqrt{3} + i}{2} \\right)^{12n - 1}\\)\n(b) \\(\\frac{(1 - i)^{n}}{(1 + i)^{n - 6}}\\), where \\(n\\) is a natural number.\n(c) \\((\\sqrt{3} + i)^{419} \\cdot \\frac{(1 - i)^{10} \\cdot (1 - i)^{11} \\cdot (1 - i)^{12}\\cdots(1 - i)^{30}}{(2 + 2i)^{414}}\\).\nHint: You may make use of the identity \\(1 + 2 + 3 + \\ldots + n = \\frac{n(n + 1)}{2}\\).",
        answer: "(a) \\(\\frac{\\sqrt{3}}{2} - \\frac{1}{2}i\\)\n(b) \\(8( - i)^{n + 1}\\)\n(c) \\(- 128 - 128\\sqrt{3}i\\)",
        steps: "(a) \\(\\left( \\frac{\\sqrt{3} + i}{2} \\right)^{3} = i\\Rightarrow \\left( \\frac{\\sqrt{3} + i}{2} \\right)^{12n - 1} = \\left\\lbrack \\left( \\frac{\\sqrt{3} + i}{2} \\right)^{3} \\right\\rbrack^{4n} \\times \\frac{2}{\\sqrt{3} + i} = i^{4n} \\times \\frac{2(\\sqrt{3} - i)}{4} = \\frac{\\sqrt{3}}{2} - \\frac{1}{2}i\\)\n(b) \\(\\frac{(1 - i)^{n}}{(1 + i)^{n - 6}} = \\left( \\frac{1 - i}{1 + i} \\right)^{n}(1 + i)^{6} = ( - i)^{n}(2i)^{3} = 8( - i)^{n + 1}\\)\n(c) \\(= 2^{5}\\left( \\frac{\\sqrt{3} + i}{2} \\right)^{419} \\cdot \\frac{(1 - i)^{\\frac{(10 + 30)21}{2}}}{(1 + i)^{414}} = 32\\left( \\frac{\\sqrt{3}}{2} - \\frac{1}{2}i \\right) \\cdot \\frac{(1 - i)^{420}}{(1 + i)^{420 - 6}} = 32\\left( \\frac{\\sqrt{3}}{2} - \\frac{1}{2}i \\right)( - 8i) = - 128 - 128\\sqrt{3}i\\)"
      },
      {
        id: "qe-2c-ex14",
        type: "Complex Numbers",
        question: "[2025-DSE-II-Q35]\n\\(i^{9} + i^{10} + i^{11} + \\ldots + i^{999} =\\)\nA. \\(- 1.\\) B. \\(0.\\) C. \\(1.\\) D. \\(i.\\)",
        answer: "A",
        steps: "\\(i^{9} + i^{10} + i^{11} + \\ldots + i^{999} = (i^{9} + i^{10} + i^{11} + i^{12}) + \\ldots + (i^{997} + i^{998} + i^{999}) = (0) + \\ldots + (i - 1 - i) = - 1\\) (A)"
      },
      {
        id: "qe-2c-ex15",
        type: "Complex Numbers",
        question: "Let \\(z = \\frac{(2i^{2026} + a)^{2}}{i^{2024} - 2i^{2025}} - 10i\\). If \\(a\\) and \\(z\\) are real, then \\(z =\\)\nA. \\(- 3\\) or \\(7.\\) B. \\(- 7\\) or \\(3.\\) C. \\(5.\\) D. \\(- 5.\\)",
        answer: "C",
        steps: "\\(\\frac{( - 2 + a)^{2}}{1 - 2i} - 10i = \\frac{(a - 2)^{2} + (a - 2)^{2}(2i) - 50i}{5}\\). For \\(z\\) to be real, \\((a - 2)^{2}(2i) - 50i = 0\\Rightarrow a = - 3\\) or \\(a = 7\\Rightarrow z = \\frac{(a - 2)^{2}}{5} = 5\\) (C)\nAlternative: Substitute each option into \\(\\frac{( - 2 + a)^{2}}{1 - 2i} - 10i\\) to see if there is any imaginary part."
      },
      {
        id: "qe-2c-ex16",
        type: "Complex Numbers",
        question: "[Challenging] The real part of \\(1 + 2i + 3i^{2} + \\ldots + 2025i^{2024}\\) is\nA. \\(- 2024.\\) B. \\(- 1012.\\) C. \\(1013.\\) D. \\(2026.\\)",
        answer: "C",
        steps: "The real part \\(= 1 - 3 + 5 - \\ldots + 2025\\) (\\(1013\\) terms) \\(= (1 - 3) + (5 - 7) + \\ldots + (2021 - 2023) + 2025 = 506( - 2) + 2025 =\\) \\(1013\\) (C)"
      }
    ],

    // ===== S.4 Functions and Graphs (S4_Math_2_Functions_and_Graphs_Editable.docx) =====
    functions_and_graphs: [
      // ---- A) Quadratic Function ----
      {
        id: "fg-a-p1",
        type: "Quadratic Function",
        question: "Find the direction of opening, \\(y\\)-intercept and the axis of symmetry of the following functions.\n(a) \\(y = 2x^{2} - 8x + 5\\)\n(b) \\(y = - x^{2} - 5x + 6\\)\n(c) \\(y = 3(x - 2)(x + 4)\\)\n(d) \\(y = 4 - x(x + 3)\\)\n(e) \\(y = - \\frac{1}{2}(x + 4)^{2} + 8\\)\n(f) \\(y = kx^{2} - 6kx + 7\\), where \\(k < 0\\).",
        answer: "(a) Opens upwards. \\(y\\)-intercept: \\(5\\). AOS: \\(x = 2\\).\n(b) Opens downwards. \\(y\\)-intercept: \\(6\\). AOS: \\(x = - 2.5\\).\n(c) Opens upwards. \\(y\\)-intercept: \\(- 24\\). AOS: \\(x = - 1\\).\n(d) Opens downwards. \\(y\\)-intercept: \\(4\\). AOS: \\(x = - 1.5\\).\n(e) Opens downwards. \\(y\\)-intercept: \\(0\\). AOS: \\(x = - 4\\).\n(f) Opens downwards. \\(y\\)-intercept: \\(7\\). AOS: \\(x = 3\\).",
        steps: "(a) \\(y = 2x^{2} - 8x + 5\\): Direction of opening: opens upwards. \\(y\\)-intercept: \\(5\\). AOS: \\(x = 2\\).\n(b) \\(y = - x^{2} - 5x + 6\\): Direction of opening: opens downwards. \\(y\\)-intercept: \\(6\\). AOS: \\(x = - 2.5\\).\n(c) \\(3x^{2} + 6x - 24\\): Direction of opening: opens upwards. \\(y\\)-intercept: \\(- 24\\). AOS: \\(x = - 1\\).\n(d) \\(- x^{2} - 3x + 4\\): Direction of opening: opens downwards. \\(y\\)-intercept: \\(4\\). AOS: \\(x = - 1.5\\).\n(e) \\(- \\frac{1}{2}x^{2} - 4x\\): Direction of opening: opens downwards. \\(y\\)-intercept: \\(0\\). AOS: \\(x = - 4\\).\n(f) \\(y = kx^{2} - 6kx + 7\\): Direction of opening: opens downwards. \\(y\\)-intercept: \\(7\\). AOS: \\(x = 3\\)."
      },
      {
        id: "fg-a-p2",
        type: "Quadratic Function",
        question: "Find the maximum/minimum point of the following functions by either completing square or substitution method.\n(a) \\(y = 2x^{2} - 8x + 5\\)\n(b) \\(y = - x^{2} - 5x + 6\\)\n(c) \\(y = 3(x - 2)(x + 4)\\)\n(d) \\(y = 4 - x(x + 3)\\)\n(e) \\(y = - \\frac{1}{2}(x + 4)^{2} + 8\\)\n(f) \\(y = mx^{2} - 6mx + 7\\), where \\(m < 0\\).",
        answer: "(a) Minimum point: \\((2, - 3)\\)\n(b) Maximum point: \\(\\left( - \\frac{5}{2},\\frac{49}{4} \\right)\\)\n(c) Minimum point: \\(( - 1, - 27)\\)\n(d) Maximum point: \\(\\left( - \\frac{3}{2},\\frac{25}{4} \\right)\\)\n(e) Maximum point: \\(( - 4,8)\\)\n(f) Maximum point: \\((3, - 9m + 7)\\)",
        steps: "(a) \\(y = 2(x - 2)^{2} - 3\\Rightarrow \\) Minimum point: \\((2, - 3)\\). Alternative: \\(h = - \\frac{- 8}{2(2)} = 2,k = 2(2)^{2} - 8(2) + 5 = - 3\\).\n(b) \\(y = - \\left( x + \\frac{5}{2} \\right)^{2} + \\frac{49}{4}\\Rightarrow \\) Maximum point: \\(\\left( - \\frac{5}{2},\\frac{49}{4} \\right)\\). Alternative: \\(h = - \\frac{- 5}{2( - 1)} = - \\frac{5}{2},k = - \\left( - \\frac{5}{2} \\right)^{2} - 5\\left( - \\frac{5}{2} \\right) + 6 = \\frac{49}{4}\\).\n(c) \\(y = 3(x + 1)^{2} - 27\\Rightarrow \\) Minimum point: \\(( - 1, - 27)\\). Alternative: \\(h = - \\frac{6}{2(3)} = - 1,k = 3( - 1)^{2} + 6( - 1) - 24 = - 27\\).\n(d) \\(y = - \\left( x + \\frac{3}{2} \\right)^{2} + \\frac{25}{4}\\Rightarrow \\) Maximum point: \\(\\left( - \\frac{3}{2},\\frac{25}{4} \\right)\\). Alternative: \\(h = - \\frac{- 3}{2( - 1)} = - \\frac{3}{2},k = - \\left( - \\frac{3}{2} \\right)^{2} - 3\\left( - \\frac{3}{2} \\right) + 4 = \\frac{25}{4}\\).\n(e) \\(y = - \\frac{1}{2}(x + 4)^{2} + 8\\Rightarrow \\) Maximum point: \\(( - 4,8)\\).\n(f) \\(y = m(x - 3)^{2} - 9m + 7\\Rightarrow \\) Maximum point: \\((3, - 9m + 7)\\). Alternative: \\(h = - \\frac{- 6m}{2m} = 3,k = m(3)^{2} - 6m(3) + 7 = 7 - 9m\\)."
      },
      {
        id: "fg-a-p3",
        type: "Quadratic Function",
        question: "Find the quadratic functions based on the given information.\n(a) Passing through points \\((0,4),(1,3)\\) and \\(( - 1,9)\\).\n(b) Axis of symmetry \\(x = - 1\\). Maximum value \\(4\\). \\(y\\)-intercept \\(2\\).\n(c) \\(x\\)-intercepts \\(- 3\\) and \\(1\\). Passing through point \\((2,10)\\).\n(d) Axis of symmetry \\(x = 3\\). Passing through points \\((1,10)\\) and \\((4, - 2)\\).\n(e) Passing through points \\((1,11)\\) and \\((5,11)\\). Maximum value \\(= 15\\).\n(f) Vertex \\((2, - 9)\\). Distance between \\(x\\)-intercepts \\(= 6\\).",
        answer: "(a) \\(y = 2x^{2} - 3x + 4\\)\n(b) \\(y = - 2(x + 1)^{2} + 4\\)\n(c) \\(y = 2(x + 3)(x - 1)\\)\n(d) \\(y = 4(x - 3)^{2} - 6\\)\n(e) \\(y = - (x - 3)^{2} + 15\\)\n(f) \\(y = (x - 5)(x + 1)\\)",
        steps: "(a) Let \\(y = ax^{2} + bx + c\\). By \\(y\\)-intercept, \\(c = 4\\). Solving \\(\\left\\{ \\begin{array}{r}\n3 = a(1)^{2} + b(1) + 4 \\\\\n9 = a( - 1)^{2} + b( - 1) + 4\n\\end{array} \\right.\\ \\), we have \\(a = 2,b = - 3\\Rightarrow y = 2x^{2} - 3x + 4\\).\n(b) Let \\(y = a(x + 1)^{2} + 4\\). By \\(2 = a(0 + 1)^{2} + 4\\), \\(a = - 2\\Rightarrow y = - 2(x + 1)^{2} + 4\\).\n(c) Let \\(y = a(x + 3)(x - 1)\\). By \\(10 = a(2 + 3)(2 - 1)\\), \\(a = 2\\Rightarrow y = 2(x + 3)(x - 1)\\).\n(d) Let \\(y = a(x - 3)^{2} + b\\). Solving \\(\\left\\{ \\begin{array}{r}\n10 = a(1 - 3)^{2} + b \\\\\n - 2 = a(4 - 3)^{2} + b\n\\end{array} \\right.\\ \\), we have \\(a = 4,b = - 6\\Rightarrow y = 4(x - 3)^{2} - 6\\).\n(e) Axis of symmetry: \\(x = \\frac{1 + 5}{2} = 3\\). Let \\(y = a(x - 3)^{2} + 15\\). By \\(11 = a(1 - 3)^{2} + 15\\), \\(a = - 1\\Rightarrow y = - (x - 3)^{2} + 15\\).\n(f) The \\(x\\)-intercepts: \\(5\\) and \\(- 1\\). Let \\(y = a(x - 5)(x + 1)\\). By \\(- 9 = a(2 - 5)(2 + 1)\\), \\(a = 1\\Rightarrow y = (x - 5)(x + 1)\\)."
      },
      {
        id: "fg-a-p4",
        type: "Quadratic Function",
        question: "a) Sketch the quadratic function \\(y = x^{2} - 4x + 3\\).\nb) Sketch the quadratic function \\(y = - x^{2} - 8x + 20\\).\nc) Sketch the quadratic function \\(y = x^{2} - 2x + 4\\).\nd) Sketch the quadratic function \\(y = - x^{2} - 2x - 5\\).",
        answer: "(a) Vertex \\((2, - 1)\\), AOS \\(x = 2\\)\n(b) Vertex \\(( - 4,36)\\), AOS \\(x = - 4\\)\n(c) Vertex \\((1,3)\\), AOS \\(x = 1\\)\n(d) Vertex \\(( - 1, - 4)\\), AOS \\(x = - 1\\)\n(The four sketches are shown below.)",
        steps: "(a) \\(y = x^{2} - 4x + 3\\) (Vertex \\((2, - 1)\\), AOS \\(x = 2\\)) and (b) \\(y = - x^{2} - 8x + 20\\) (Vertex \\(( - 4,36)\\), AOS \\(x = - 4\\)):\n(c) \\(y = x^{2} - 2x + 4\\) (Vertex \\((1,3)\\), AOS \\(x = 1\\)) and (d) \\(y = - x^{2} - 2x - 5\\) (Vertex \\(( - 1, - 4)\\), AOS \\(x = - 1\\)):",
        stepsImages: [{ src: "images/fg-a-p4-sol-1.png", width: 298 }, { src: "images/fg-a-p4-sol-2.png", width: 298 }, { src: "images/fg-a-p4-sol-3.png", width: 298 }, { src: "images/fg-a-p4-sol-4.png", width: 298 }]
      },
      {
        id: "fg-a-ex1",
        type: "Quadratic Function",
        question: "The figure shows the graph of the quadratic function \\(y = f(x)\\). Find \\(f(x)\\).\nA. \\(f(x) = x^{2} - 5x + 4\\)\nB. \\(f(x) = x^{2} + 5x + 4\\)\nC. \\(f(x) = \\frac{1}{2}x^{2} - \\frac{5}{2}x + 2\\)\nD. \\(f(x) = \\frac{1}{2}x^{2} + \\frac{5}{2}x + 2\\)",
        images: [{ src: "images/fg-a-ex1.png", width: 163 }],
        answer: "C",
        steps: "Let the quadratic function be \\(y = a(x - 1)(x - 4)\\)\n\\(2 = a(0 - 1)(0 - 4)\\Rightarrow a = \\frac{1}{2}\\)\n\\(y = \\frac{1}{2}(x - 1)(x - 4) = \\frac{1}{2}x^{2} - \\frac{5}{2}x + 2\\) (C)"
      },
      {
        id: "fg-a-ex2",
        type: "Quadratic Function",
        question: "The figure shows the graph of \\(y = \\frac{- 1}{3}(x + 6)(x - a)\\) and the equation of the axis of symmetry of the graph is \\(x = \\frac{- 5}{2}\\). Find the \\(y\\)-intercept of the graph.\nA. \\(2\\) B. \\(\\frac{3}{2}\\) C. \\(1\\) D. \\(\\frac{1}{2}\\)",
        images: [{ src: "images/fg-a-ex2.png", width: 163 }],
        answer: "A",
        steps: "\\(\\frac{( - 6) + a}{2} = \\frac{- 5}{2}\\Rightarrow a = 1\\)\n\\(y = \\frac{- 1}{3}(x + 6)(x - 1) = - \\frac{1}{3}x^{2} - \\frac{5}{3}x + 2\\) (A)"
      },
      {
        id: "fg-a-ex3",
        type: "Quadratic Function",
        question: "The figure shows the graph of \\(y = - bx^{2} - cx + 1\\), where \\(b\\) and \\(c\\) are constants. Which of the following is true?\nA. \\(b > 0\\) and \\(c > 0\\) B. \\(b > 0\\) and \\(c < 0\\)\nC. \\(b < 0\\) and \\(c > 0\\) D. \\(b < 0\\) and \\(c < 0\\)",
        images: [{ src: "images/fg-a-ex3.png", width: 168 }],
        answer: "C",
        steps: "\\(- b > 0\\) which implies \\(b < 0\\).\nAOS: \\(\\frac{- ( - c)}{2( - b)} > 0\\) and \\(b < 0\\), implies that \\(c > 0\\). (C)"
      },
      {
        id: "fg-a-ex4",
        type: "Quadratic Function",
        question: "Refer to the graph of \\(y = (ax + 4)^{2} + b\\). Which of the following is true?\nA. \\(a < 0\\) and \\(b < 0\\) B. \\(a < 0\\) and \\(b > 0\\)\nC. \\(a > 0\\) and \\(b < 0\\) D. \\(a > 0\\) and \\(b > 0\\)",
        images: [{ src: "images/fg-a-ex4.png", width: 163 }],
        answer: "B",
        steps: "\\(\\therefore\\) The vertex of the graph of \\(y = (ax + 4)^{2} + b\\) is \\(\\left( - \\frac{4}{a},b \\right)\\).\nFrom the given graph, the \\(x\\)-coordinate of the vertex is positive: \\(\\therefore - \\frac{4}{a} > 0\\Rightarrow a < 0\\).\nFrom the given graph, the \\(y\\)-coordinate of the vertex is positive: \\(\\therefore b > 0\\). (B)"
      },
      {
        id: "fg-a-ex5",
        type: "Quadratic Function",
        question: "The figure shows the graph of \\(y = (ax - h)^{2} + k\\), where \\(a,h\\) and \\(k\\) are constants. Which of the following must be true?\nI. \\(ah < 0\\) II. \\(k < 0\\) III. \\(h^{2} = k\\)\nA. I only B. III only C. I and II only D. II and III only",
        images: [{ src: "images/fg-a-ex5.png", width: 163 }],
        answer: "C",
        steps: "The vertex of the graph of \\(y = (ax - h)^{2} + k\\) is \\(\\left( \\frac{h}{a},k \\right)\\).\nI: From the given graph, the \\(x\\)-coordinate of the vertex is negative \\(\\Rightarrow h\\) and \\(a\\) are in different signs (\u2713).\nII: From the given graph, the \\(y\\)-coordinate of the vertex is negative \\(\\Rightarrow k < 0\\) (\u2713).\nIII: \\(\\because\\) The graph passes through \\((0,0)\\Rightarrow \\lbrack a(0) - h\\rbrack^{2} + k = 0\\Rightarrow h^{2} = - k\\) (\\(\\times\\)). (C)"
      },
      {
        id: "fg-a-ex6",
        type: "Quadratic Function",
        question: "The figure shows the graph of \\(y = ax(b - x) - c\\), where \\(a,b\\) and \\(c\\) are constants. Which of the following are true?\nI. \\(a < 0\\) II. \\(c > 0\\) III. \\(b^{2} < \\frac{4c}{a}\\)\nA. I only. B. II only. C. I and III only. D. II and III only.",
        images: [{ src: "images/fg-a-ex6.png", width: 163 }],
        answer: "C",
        steps: "\\(y = - ax^{2} + abx - c\\). I: Open upwards \\(\\rightarrow - a > 0 \\rightarrow a < 0\\) (\u2713). II: \\(y\\)-intercept \\(\\rightarrow - c > 0 \\rightarrow c < 0\\) (\\(\\times\\)).\nIII: From the graph, there is no \\(x\\)-intercept, so \\(\\Delta < 0\\): \\((ab)^{2} - 4( - a)( - c) < 0\\Rightarrow a^{2}b^{2} - 4ac < 0\\Rightarrow a(ab^{2} - 4c) < 0\\). Since \\(a < 0\\), dividing both sides by \\(a\\) reverses the inequality: \\(ab^{2} - 4c > 0\\Rightarrow ab^{2} > 4c\\). Dividing both sides by \\(a < 0\\) reverses the inequality again: \\(b^{2} < \\frac{4c}{a}\\) (\u2713). (C)"
      },
      {
        id: "fg-a-ex7",
        type: "Quadratic Function",
        question: "The figure shows the graph of \\(y = ax^{2} + bx - 3b\\), where \\(a\\) and \\(b\\) are constants. Which of the following is/are true?\nI. \\(a > 0\\) II. \\(b < 0\\) III. \\(12a + b < 0\\)\nA. I only B. I and II only C. II and III only D. I, II and III",
        images: [{ src: "images/fg-a-ex7.png", width: 163 }],
        answer: "D",
        steps: "I: Open upwards (\u2713). II: For \\(y\\)-intercept, \\(- 3b > 0\\Rightarrow b < 0\\) (\u2713).\nIII: \\(b^{2} - 4a( - 3b) > 0\\Rightarrow b^{2} + 12ab > 0\\Rightarrow b(b + 12a) > 0\\Rightarrow 12a + b < 0\\) (\\(\\because b < 0\\)) (\u2713). (D)"
      },
      {
        id: "fg-a-ex8",
        type: "Quadratic Function",
        question: "If \\(0 < m < 16\\), which of the following may represent the graph of \\(y = (4 - mx)^{2} - m\\)?",
        images: [{ src: "images/fg-a-ex8.png", width: 422 }],
        answer: "C",
        steps: "Vertex \\(= \\left( \\frac{4}{m}, - m \\right) \\rightarrow x\\) is positive and \\(y\\) is negative (A or C).\n\\(y\\)-intercept \\(= 4^{2} - m = 16 - m > 0\\) (Ans: C)"
      },
      {
        id: "fg-a-ex9",
        type: "Quadratic Function",
        question: "Let \\(- 1 < a < 0\\). Which of the following can best represent the graph of \\(y = a(1 - ax)^{2} + a\\)?",
        images: [{ src: "images/fg-a-ex9.png", width: 422 }],
        answer: "A",
        steps: "Opens downwards \\(\\rightarrow\\) (A or B).\nVertex \\(= \\left( \\frac{1}{a},a \\right) \\rightarrow\\) A (A)"
      },
      {
        id: "fg-a-ex10",
        type: "Quadratic Function",
        question: "[WYK-2425-S4-Final-II-Q8]\nThe figure shows the graph of \\(y = (x - a)(x + 1) + b\\), where \\(a\\) and \\(b\\) are constants. Which of the following is true?\nA. \\(1 < a < b\\) B. \\(1 < b < a\\) C. \\(a < 1 < b\\) D. \\(b < 1 < a\\)",
        images: [{ src: "images/fg-a-ex10.png", width: 163 }],
        answer: "A",
        steps: "\\(y\\)-intercept \\(= - a + b > 0\\Rightarrow b > a\\). Axis of Symmetry \\(= \\frac{a - 1}{2} > 0\\Rightarrow a - 1 > 0\\Rightarrow a > 1\\therefore b > a > 1\\) (A)"
      },
      {
        id: "fg-a-ex11",
        type: "Quadratic Function",
        question: "[WYK-2526-S5-Final-II-Q12]\nLet \\(h\\) and \\(k\\) be real constants such that \\(hk < 0\\). Which of the following statements about the graph of \\(y = (x - h)(k - x)\\) are true?\nI. The graph opens downwards. II. The \\(y\\)-intercept of the graph is positive. III. The graph cuts the negative \\(x\\)-axis at two distinct points.\nA. I and II only B. I and III only C. II and III only D. I, II and III",
        answer: "A",
        steps: "I: Coefficient of \\(x^{2} = - 1 < 0\\) (\u2713). II: \\(y\\)-intercept \\(= - hk > 0\\) (\u2713). III: \\(x\\)-intercepts \\(= h\\) and \\(k\\) (\\(\\times\\)). (A)"
      },
      {
        id: "fg-a-ex12",
        type: "Quadratic Function",
        question: "[WYK-2526-S6-Mock-II-Q23]\nLet \\(a > 0 > b > c\\), where \\(a,b,c\\) are constants. Which of the following statements about the graph of \\(y = ( - ax - b)^{2} - c\\) are true?\nI. The graph opens downwards. II. The axis of symmetry of the graph is on the right of the \\(y\\)-axis. III. The graph does not cut the \\(x\\)-axis.\nA. I and II only B. I and III only C. II and III only D. I, II and III",
        answer: "C",
        steps: "I: (\\(\\times\\)). II: Vertex \\(\\left( - \\frac{b}{a}, - c \\right)\\). Note that \\(- \\frac{b}{a} > 0\\) (\u2713). III: Opens upwards with minimum value \\(= - c > 0\\) (\u2713). (C)"
      },
      {
        id: "fg-a-ex13",
        type: "Quadratic Function",
        question: "\\(f(x)\\) is a quadratic function. The vertex of the graph \\(y = f(x)\\) is \\((k,2k^{2} - 8)\\) and the \\(y\\)-intercept of the graph of \\(y = f(x)\\) is \\(- 8\\), where \\(k\\) is a non-zero constant. Which of the following about the function \\(f(x)\\) must be correct?\nI. The graph of the function \\(y = f(x)\\) opens upwards. II. The maximum value of \\(f(x)\\) is greater than \\(- 8\\). III. The graph of the function \\(y = f(x)\\) intersects the \\(x\\)-axis at two distinct points.\nA. I only B. I and III only C. II only D. II and III only",
        answer: "C",
        steps: "\\(f(x) = a(x - k)^{2} + 2k^{2} - 8\\Rightarrow - 8 = a(0 - k)^{2} + 2k^{2} - 8\\Rightarrow a = - 2\\Rightarrow f(x) = - 2(x - k)^{2} + 2k^{2} - 8\\).\nI: (\\(\\times\\)). II: Maximum value \\(= 2k^{2} - 8 > - 8\\) (\u2713). III: Opens downwards with maximum value that may be smaller than \\(0 \\rightarrow\\) no real roots (\\(\\times\\)). (C)"
      },
      {
        id: "fg-a-ex14",
        type: "Quadratic Function",
        question: "[Challenging]\nThe figure shows the graph of \\(y = ax^{2} + bx + c\\), where \\(a,b\\) and \\(c\\) are constants. If the graph passes through \\(( - 3, - 2)\\), which of the following is/are true?\nI. \\(abc < 0\\) II. \\(\\frac{b^{2}}{ac} > 4\\) III. \\(9a - 3b + c < 0\\)\nA. I only B. II only C. I and III only D. II and III only",
        images: [{ src: "images/fg-a-ex14.png", width: 163 }],
        answer: "C",
        steps: "I: Open upwards \\(\\rightarrow a > 0\\), \\(y\\)-intercept negative \\(\\rightarrow c < 0\\), Sign test on \\(b \\rightarrow b > 0\\therefore abc < 0\\) (\u2713).\nII: \\(b^{2} - 4ac > 0\\Rightarrow b^{2} > 4ac\\Rightarrow \\frac{b^{2}}{ac} < 4\\) (\\(\\because ac < 0\\)) (\\(\\times\\)).\nIII: Substitute \\(( - 3, - 2)\\): \\(- 2 = 9a - 3b + c\\therefore 9a - 3b + c < 0\\) (\u2713). (C)"
      },
      {
        id: "fg-a-ex15",
        type: "Quadratic Function",
        question: "[Challenging]\nThe figure shows the graph of \\(y = ax^{2} + bx + c\\), where \\(a,b\\) and \\(c\\) are constants. Which of the following is/are true?\nI. \\(2a + b > 0\\) II. \\(bc < ba\\) III. \\(a + b + c < 0\\)\nA. I and II only B. I and III only C. II and III only D. I, II and III.",
        images: [{ src: "images/fg-a-ex15.png", width: 163 }],
        answer: "D",
        steps: "I: AOS: \\(\\frac{- b}{2a} > 1\\Rightarrow - b < 2a\\) (\\(a\\) is negative) \\(\\Rightarrow 2a + b > 0\\) (\u2713).\nII: Product of roots \\(= \\frac{c}{a} > 1\\) (Since both roots \\(> 1\\)) \\(\\Rightarrow c < a\\Rightarrow bc < ba\\) (\\(b\\) is positive) (\u2713).\nIII: At \\(x = 1\\), \\(a(1)^{2} + b(1) + c < 0\\Rightarrow a + b + c < 0\\) (\u2713). (D)"
      },
      {
        id: "fg-a-ex16",
        type: "Quadratic Function",
        question: "[Challenging]\nThe figure shows the graph of \\(y = (x - m)^{2} - n^{2}\\). Which of the following must be true?\nI. \\(n > 0\\) II. \\(m > n\\) III. \\(m + n > 0\\)\nA. II only B. III only C. I and III only D. II and III only",
        images: [{ src: "images/fg-a-ex16.png", width: 163 }],
        answer: "D",
        steps: "Vertex \\(= (m, - n^{2})\\). I: \\(- n^{2} < 0\\Rightarrow n^{2} > 0\\); unable to determine the sign of \\(n\\) (\\(\\times\\)).\nII: For the \\(y\\)-intercept, \\(m^{2} - n^{2} > 0\\Rightarrow m^{2} > n^{2}\\). Note that \\(m > 0\\), so \\(m > n\\) (\u2713).\nIII: From II, \\(m > - n\\Rightarrow m + n > 0\\) (\u2713). (D)"
      },
      {
        id: "fg-a-ex17",
        type: "Quadratic Function",
        question: "[Challenging]\nLet \\(f(x) = hx^{2} + kx + m\\), where \\(h,k\\) and \\(m\\) are constants. The graph of \\(y = f(x)\\) cuts the \\(x\\)-axis at two points \\(A\\) and \\(B\\) such that \\(AB = 6\\) units, and it cuts the line \\(y = 16\\) at two points \\(C\\) and \\(D\\) such that \\(CD = 10\\) units. Find the value of \\(h\\).\nA. \\(1\\) B. \\(- 1\\) C. \\(2\\) D. \\(- 2\\)",
        answer: "A",
        steps: "Let \\(x = a\\) be the axis of symmetry. The \\(x\\)-intercepts: \\(a - \\frac{6}{2} = a - 3\\) and \\(a + \\frac{6}{2} = a + 3\\).\nLet \\(f(x) = h(x - a + 3)(x - a - 3)\\). Coordinates of \\(C\\): \\(\\left( a - \\frac{10}{2},16 \\right) = (a - 5,16)\\).\nPutting \\(C\\) into \\(f(x)\\): \\(16 = h(a - 5 - a + 3)(a - 5 - a - 3)\\Rightarrow h = 1\\) (A)"
      },
      // ---- B) MC Questions related to Functions ----
      {
        id: "fg-b-ex1",
        type: "MC Questions related to Functions",
        question: "[DSE-2019-II-Q8] Let \\(f(x) = x^{3} + cx^{2} + c\\). If \\(c\\) is a constant, then \\(f(c) + f( - c) =\\)\nA. \\(0\\) B. \\(2c\\) C. \\(2c^{3} + 2c\\) D. \\(- 2c^{3} + 2c\\)",
        answer: "C",
        steps: "\\(\\lbrack(c)^{3} + c(c)^{2} + c\\rbrack + \\lbrack( - c)^{3} + c(c)^{2} + c\\rbrack = 2c^{3} + 2c\\) (C)"
      },
      {
        id: "fg-b-ex2",
        type: "MC Questions related to Functions",
        question: "[DSE-2025-II-Q8] Let \\(f(x) = x^{2} + 7x + k\\) where \\(k\\) is a constant. If \\(f(4) + f( - 4) = 38\\), find \\(k\\).\nA. \\(- 6\\) B. \\(- 3\\) C. \\(3\\) D. \\(6\\)",
        answer: "C",
        steps: "\\(\\lbrack(4)^{2} + 7(4) + k\\rbrack + \\lbrack( - 4)^{2} + 7( - 4) + k\\rbrack = 2(4)^{2} + 2k = 38\\Rightarrow k = 3\\) (C)"
      },
      {
        id: "fg-b-ex3",
        type: "MC Questions related to Functions",
        question: "[DSE-2020-P2-Q5] Let \\(f(x) = 3x^{2} - x - 2\\). If \\(\\beta\\) is a constant, then \\(f(1 + \\beta) - f(1 - \\beta) =\\)\nA. \\(2\\beta\\) B. \\(10\\beta\\) C. \\(6\\beta^{2} - 2\\) D. \\(6\\beta^{2} - 2\\beta\\)",
        answer: "B",
        steps: "Method 1: \\(f(1 + \\beta) = 3\\beta^{2} + 5\\beta,f(1 - \\beta) = 3\\beta^{2} - 5\\beta \\Rightarrow (3\\beta^{2} + 5\\beta) - (3\\beta^{2} - 5\\beta) = 10\\beta\\).\nMethod 2: Sub \\(\\beta = 10\\), \\(f(1 + \\beta) - f(1 - \\beta) = f(11) - f( - 9) = 100\\) (Option A: \\(20\\), Option B: 100, Option C: \\(598\\), Option D: \\(580\\)). (B)"
      },
      {
        id: "fg-b-ex4",
        type: "MC Questions related to Functions",
        question: "If \\(f(x + 1) = - 3x^{2} + 2x\\), then \\(f(x - 1) =\\)\nA. \\(- 3x^{2} + 2x\\) B. \\(- 3x^{2} + 8x - 5\\) C. \\(- 3x^{2} + 14x - 16\\) D. \\(- 3x^{2} - 4x - 1\\)",
        answer: "C",
        steps: "Let \\(u = x + 1,x = u - 1\\): \\(f(u) = - 3(u - 1)^{2} + 2(u - 1) = - 3u^{2} + 8u - 5\\Rightarrow f(x - 1) = - 3(x - 1)^{2} + 8(x - 1) - 5 = - 3x^{2} + 14x - 16\\) (C)\nAlternative 1: Note \\(x - 1 = (x + 1) - 2\\Rightarrow f(x - 1) = - 3(x - 2)^{2} + 2(x - 2) = - 3x^{2} + 14x - 16\\).\nAlternative 2: Sub \\(x = - 2\\Rightarrow f( - 1) = - 16\\). Sub \\(x = 0\\) into options: Option A: \\(0\\), Option B: \\(- 5\\), Option C: \\(- 16\\), Option D: \\(- 1\\)."
      },
      {
        id: "fg-b-ex5",
        type: "MC Questions related to Functions",
        question: "[2526-WYK-S5-Final-P2-Q7] If \\(f(x) = 2x^{2} - 3x + 4\\), if \\(m\\) is a constant, then \\(f(m + 2) - f(m - 1) =\\)\nA. \\(- 2m - 15\\) B. \\(- 2m + 15\\) C. \\(12m - 3\\) D. \\(12m + 3\\)",
        answer: "C",
        steps: "Method 1: \\(f(m + 2) = 2m^{2} + 5m + 6,f(m - 1) = 2m^{2} - 7m + 9\\Rightarrow (2m^{2} + 5m + 6) - (2m^{2} - 7m + 9) = 12m - 3\\).\nMethod 2: Sub \\(m = 0\\), \\(f(2) - f( - 1) = - 3\\). Only option C matches. (C)"
      },
      {
        id: "fg-b-ex6",
        type: "MC Questions related to Functions",
        question: "If \\(f(3x + 1) = 6x + 5\\), find \\(f(7)\\).\nA. \\(7\\) B. \\(17\\) C. \\(47\\) D. \\(137\\)",
        answer: "B",
        steps: "Sub \\(x = 2,f(7) = 6(2) + 5 = 17\\). (B)"
      },
      {
        id: "fg-b-ex7",
        type: "MC Questions related to Functions",
        question: "Let \\(f(x) = ax^{7} + bx^{5} + cx - 11\\), where \\(a,b\\) and \\(c\\) are constants. If \\(f( - 4) = 28\\), find \\(f(4)\\).\nA. \\(- 50\\) B. \\(- 28\\) C. \\(28\\) D. \\(50\\)",
        answer: "A",
        steps: "\\(a( - 4)^{7} + b( - 4)^{5} + c( - 4) - 11 = 28\\Rightarrow a(4)^{7} + b(4)^{5} + c(4) = - 39\\Rightarrow f(4) = - 39 - 11 =\\) \\(- 50\\) (A)"
      },
      {
        id: "fg-b-ex8",
        type: "MC Questions related to Functions",
        question: "[Challenging] Let \\(f(x)\\) be a function such that \\(f(x + y) = f(x)f(y)\\) for all real numbers \\(x\\) and \\(y\\). If \\(f(1) = 3\\), find the value of \\(f(4)\\).\nA. \\(12\\) B. \\(27\\) C. \\(81\\) D. \\(243\\)",
        answer: "C",
        steps: "\\(f(2) = f(1 + 1) = f(1)f(1) = 3 \\times 3 = 9\\); \\(f(4) = f(2 + 2) = f(2)f(2) = 9 \\times 9 = 81\\) (C)"
      },
      {
        id: "fg-b-ex9",
        type: "MC Questions related to Functions",
        question: "[2024-DSE-II-Q8] Let \\(g(x) = (x + 1)(x + a)\\), where \\(a\\) is a constant. If \\(g(1) = g(2)\\), then \\(g(a) =\\)\nA. \\(- 4\\) B. \\(0\\) C. \\(12\\) D. \\(24\\)",
        answer: "D",
        steps: "Since it is a quadratic function, the axis of symmetry: \\(x = 1.5\\). \\(\\frac{- 1 - a}{2} = 1.5 \\rightarrow a = - 4\\). \\(g(a) = ( - 4 + 1)( - 4 - 4) = 24\\) (D)"
      },
      {
        id: "fg-b-ex10",
        type: "MC Questions related to Functions",
        question: "[2022-DSE-II-Q8] Let \\(f(x) = x^{2} - x + 1\\). If \\(k\\) is a constant, which of the following must be true?\nA. \\(f(k) = f( - k)\\) B. \\(f(k) = f(1 - k)\\) C. \\(f(k + 1) = f(k) + f(1)\\) D. \\(f(k - 1) = f(k) - f(1)\\)",
        answer: "B",
        steps: "Axis of symmetry: \\(x = \\frac{1}{2}\\). Option B has an axis of symmetry of \\(x = \\frac{k + (1 - k)}{2} = \\frac{1}{2}\\). (B)"
      },
      {
        id: "fg-b-ex11",
        type: "MC Questions related to Functions",
        question: "[2425-WYK-S4-Final-II-Q7] Let \\(f(x) = x^{2} - 2mx\\). \\(f(m + 1) - f(m - 1) =\\)\nA. \\(0\\) B. \\(4m\\) C. \\(8m\\) D. \\(- 8m\\)",
        answer: "A",
        steps: "Note that the function is symmetric about \\(x = m\\). At the same time, \\(f(m + 1) = f(m - 1)\\) since the mid-point of \\(m + 1\\) and \\(m - 1\\) is \\(m\\). (A)"
      },
      {
        id: "fg-b-ex12",
        type: "MC Questions related to Functions",
        question: "Let \\(g(x) = 2x^{2} - 1\\). If \\(h\\) and \\(k\\) are constants, which of the following must be true?\nI. \\(g(h) = g( - h)\\) II. \\(g(1 - k) = g(k - 1)\\) III. \\(g(h + k) = g(h) + g(k) + 1\\)\nA. I and II only B. I and III only C. II and III only D. I, II and III",
        answer: "A",
        steps: "Axis of symmetry: \\(x = 0\\). I has AOS \\(x = \\frac{h + ( - h)}{2} = 0\\), II has AOS \\(x = \\frac{1 - k + (k - 1)}{2} = 0\\). Statement III: \\(g(h + k) = 2h^{2} + 4hk + 2k^{2} - 1 \\neq g(h) + g(k) + 1\\). (A)"
      },
      {
        id: "fg-b-ex13",
        type: "MC Questions related to Functions",
        question: "Let \\(f(x) = 3x^{2} - bx + 4\\), where \\(b\\) is a constant. If \\(f(x) = f(2 - x)\\), then \\(b =\\)\nA. \\(- 6\\) B. \\(2\\) C. \\(6\\) D. \\(16\\)",
        answer: "C",
        steps: "Axis of symmetry: \\(x = \\frac{x + 2 - x}{2} = 1\\Rightarrow \\frac{b}{2(3)} = 1 \\rightarrow b = 6\\) (C)"
      },
      // ---- C) Applications of Completing Square ----
      {
        id: "fg-c-ex1",
        type: "Applications of Completing Square",
        question: "[Level 1]\nA wire of length \\(72\\ cm\\) is cut into two pieces. One piece is bent to form a rectangle with area \\(A{\\ cm}^{2}\\). The other piece of length \\(x\\ cm\\) is used to divide the rectangle into two rectangular parts as shown in the figure.\n(a) Express \\(A\\) in terms of \\(x\\).\n(b) Find the maximum area of the rectangle and the corresponding value of \\(x\\).",
        images: [{ src: "images/fg-c-ex1.png", width: 115 }],
        answer: "(a) \\(A = 36x - \\frac{3}{2}x^{2}\\)\n(b) Maximum area \\(= 216{\\ cm}^{2}\\), when \\(x = 12\\)",
        steps: "(a) \\(A = x\\left( \\frac{72 - 3x}{2} \\right) =\\) \\(36x - \\frac{3}{2}x^{2}\\)\n(b) \\(A = 36x - \\frac{3}{2}x^{2} = - \\frac{3}{2}(x^{2} - 24x + 12^{2} - 12^{2}) = - \\frac{3}{2}(x - 12)^{2} + 216\\). \\(\\therefore\\) The maximum area of the rectangle is \\(216{\\ cm}^{2}\\) and the corresponding value of \\(x\\) is \\(12\\)."
      },
      {
        id: "fg-c-ex2",
        type: "Applications of Completing Square",
        question: "[Level 1]\nThe figure shows a square \\(ABCD\\) of side \\(40\\ cm\\). \\(E\\) and \\(F\\) are points lying on \\(AB\\) and \\(AD\\) respectively. Let \\(AE = \\sqrt{x}\\ cm\\) and \\(AF = \\sqrt{900 - x}\\ cm\\).\n(a) Find the maximum/minimum area of \\(\\bigtriangleup AEF\\).\n(b) Will the area of the pentagon \\(BCDFE\\) be less than \\(1300{\\ cm}^{2}\\)? Explain your answer.",
        images: [{ src: "images/fg-c-ex2.png", width: 139 }],
        answer: "(a) Maximum area of \\(\\bigtriangleup AEF = 225{\\ cm}^{2}\\)\n(b) No. The minimum area of the pentagon \\(BCDFE = 1375{\\ cm}^{2} > 1300{\\ cm}^{2}\\).",
        steps: "(a) Area of \\(\\bigtriangleup AEF = \\frac{\\sqrt{x}\\sqrt{900 - x}}{2} = \\frac{\\sqrt{900x - x^{2}}}{2} = \\frac{\\sqrt{- (x - 450)^{2} + 202500}}{2}\\). When \\(x = 450\\), maximum area of \\(\\bigtriangleup AEF = \\frac{\\sqrt{202500}}{2} = 225{\\ cm}^{2}\\).\n(b) Minimum area of the pentagon \\(BCDFE = 40 \\times 40 - 225 = 1375{\\ cm}^{2} > 1300{\\ cm}^{2}\\). \\(\\therefore\\) The area of the pentagon \\(BCDFE\\) will not be less than \\(1300{\\ cm}^{2}\\)."
      },
      {
        id: "fg-c-ex3",
        type: "Applications of Completing Square",
        question: "[Level 1]\nThe graph of a quadratic function \\(y = f(x)\\) cuts the \\(x\\)-axis at \\(A(1,0)\\) and \\(B\\). It is given that \\(x = 4\\) is the axis of symmetry of the graph.\n(a) Find the coordinates of \\(B\\).\n(b) If the \\(y\\)-intercept of the graph is \\(- 7\\), find \\(f(x)\\).\n(c) Find the coordinates of the vertex of the graph.",
        answer: "(a) \\(B = (7,0)\\)\n(b) \\(f(x) = - (x - 1)(x - 7)\\)\n(c) Vertex \\(= (4,9)\\)",
        steps: "(a) Let \\((b,0)\\) be the coordinates of \\(B\\). \\(\\frac{1 + b}{2} = 4\\Rightarrow b = 7\\therefore\\) The coordinates of \\(B\\) are \\((7,0)\\).\n(b) Let \\(f(x) = a(x - 1)(x - 7)\\). \\(a(0 - 1)(0 - 7) = - 7\\Rightarrow a = - 1\\Rightarrow f(x) = - (x - 1)(x - 7)\\).\n(c) \\(f(4) = - 4^{2} + 8(4) - 7 = 9\\therefore\\) The coordinates of the vertex of the graph are \\((4,9)\\)."
      },
      {
        id: "fg-c-ex4",
        type: "Applications of Completing Square",
        question: "[Level 1]\nIt is given that the graph of \\(y = g(x) = 2x^{2} + 10x + b\\) cuts the \\(x\\)-axis at two points \\(A(\\alpha,0)\\) and \\(B(\\beta,0)\\). It satisfies \\(\\frac{3}{\\alpha} + \\frac{3}{\\beta} = 10\\).\n(a) Find the value of \\(b\\).\n(b) Let \\(V\\) be the vertex of the graph of \\(y = g(x)\\). Using the method of completing square, find the coordinates of \\(V\\).",
        answer: "(a) \\(b = - 3\\)\n(b) \\(V\\left( \\frac{- 5}{2},\\frac{- 31}{2} \\right)\\)",
        steps: "(a) \\(\\alpha + \\beta = - 5,\\alpha\\beta = \\frac{b}{2}\\). \\(\\frac{3(\\alpha + \\beta)}{\\alpha\\beta} = 10\\Rightarrow \\frac{3( - 5)}{\\frac{b}{2}} = 10\\Rightarrow b = - 3\\).\n(b) \\(y = 2x^{2} + 10x - 3 = 2\\left\\lbrack x^{2} + 5x + \\left( \\frac{5}{2} \\right)^{2} - \\left( \\frac{5}{2} \\right)^{2} \\right\\rbrack - 3 = 2\\left( x + \\frac{5}{2} \\right)^{2} - \\frac{31}{2}\\). The vertex: \\(V\\left( \\frac{- 5}{2},\\frac{- 31}{2} \\right)\\)."
      },
      {
        id: "fg-c-ex5",
        type: "Applications of Completing Square",
        question: "[Level 2]\nThe vertex of the parabola \\(y = f(x)\\) is \\(V\\left( 3,\\frac{96}{7} \\right)\\) and \\(y = f(x)\\) cuts \\(y\\)-axis at \\(A(0,6)\\). The parabola cuts the \\(x\\)-axis at two points \\(B(\\alpha,0)\\) and \\(C(\\beta,0)\\), where \\(\\alpha < \\beta\\).\n(a) Find \\(f(x)\\).\n(b) Find the area of \\(\\bigtriangleup VAC\\).",
        answer: "(a) \\(f(x) = - \\frac{6}{7}(x - 3)^{2} + \\frac{96}{7}\\)\n(b) Area of \\(\\bigtriangleup VAC = 36\\)",
        steps: "(a) \\(f(x) = a(x - 3)^{2} + \\frac{96}{7}\\). Put \\(A(0,6)\\): \\(6 = a(0 - 3)^{2} + \\frac{96}{7}\\Rightarrow - \\frac{54}{7} = 9a\\Rightarrow a = - \\frac{6}{7}\\Rightarrow f(x) = - \\frac{6}{7}(x - 3)^{2} + \\frac{96}{7}\\).\n(b) \\(0 = - \\frac{6}{7}(x - 3)^{2} + \\frac{96}{7}\\Rightarrow (x - 3)^{2} = 16\\Rightarrow x = 7\\) or \\(x = - 1\\Rightarrow C(7,0)\\). Area of \\(\\bigtriangleup VAC = Area\\ of\\ OVAC - Area\\ of\\ \\bigtriangleup OAC = \\left\\{ \\frac{1}{2}\\left( 6 + \\frac{96}{7} \\right)(3) + \\frac{1}{2}(7 - 3)\\left( \\frac{96}{7} \\right) \\right\\} - \\frac{1}{2}(6)(7) = \\frac{207}{7} + \\frac{192}{7} - 21 = 36\\)."
      },
      {
        id: "fg-c-ex6",
        type: "Applications of Completing Square",
        question: "[Level 2] [2526-WYK-S4-Final-I-Q14]\nLet \\(f(x) = 4x^{2} - 8kx + 6k^{2} + 3\\), where \\(k\\) is a non-zero real constant. Denote the vertex of the graph of \\(y = f(x)\\) by \\(P\\).\n(a) Using the method of completing the square, express the coordinates of \\(P\\) in terms of \\(k\\).\n(b) Suppose that the coordinates of \\(Q\\) is \\(( - k, - 10k^{2} - 15)\\), and \\(M\\) is a point lying on \\(PQ\\) such that the area of \\(\\bigtriangleup OMP\\) is half of the area of \\(\\bigtriangleup OMQ\\), where \\(O\\) is the origin. Express the coordinates of \\(M\\) in terms of \\(k\\).",
        answer: "(a) \\(P = (k,2k^{2} + 3)\\)\n(b) \\(M = \\left( \\frac{k}{3}, - 2k^{2} - 3 \\right)\\)",
        steps: "(a) \\(y = 4(x^{2} - 2kx + k^{2} - k^{2}) + 6k^{2} + 3 = 4(x - k)^{2} + 2k^{2} + 3\\). The coordinates of \\(P\\) are \\((k,2k^{2} + 3)\\).\n(b) \\(\\frac{Area\\ of\\ \\bigtriangleup OMP}{Area\\ of\\ \\bigtriangleup OMQ} = \\frac{MP}{MQ} = \\frac{1}{2}\\Rightarrow M = \\left( \\frac{2(k) + 1( - k)}{1 + 2},\\frac{2(2k^{2} + 3) + 1( - 10k^{2} - 15)}{1 + 2} \\right) = \\left( \\frac{k}{3}, - 2k^{2} - 3 \\right)\\)."
      },
      {
        id: "fg-c-ex7",
        type: "Applications of Completing Square",
        question: "[Level 2] [2022-DSE-I-Q16]\nLet \\(g(x) = 3x^{2} + 12kx + 16k^{2} + 8\\), where \\(k\\) is a non-zero real constant.\n(a) Using the method of completing the square, express the coordinates of the vertex of the graph of \\(y = g(x)\\) in terms of \\(k\\).\n(b) On the same rectangular coordinate system, denote the vertex of the graph of \\(y = g(x)\\) and the vertex of the graph of \\(y = 2g( - x)\\) by \\(A\\) and \\(B\\) respectively. Let \\(M\\) be a point lying on \\(AB\\) such that the area of \\(\\bigtriangleup OBM\\) is the triple of the area of \\(\\bigtriangleup OAM\\), where \\(O\\) is the origin. Express the coordinates of \\(M\\) in terms of \\(k\\).",
        answer: "(a) \\(( - 2k,4k^{2} + 8)\\)\n(b) \\(M = ( - k,5k^{2} + 10)\\)",
        steps: "(a) \\(g(x) = 3(x^{2} + 4kx + 4k^{2}) + 4k^{2} + 8 = 3(x + 2k)^{2} + 4k^{2} + 8\\). The coordinates of \\(A\\) are \\(( - 2k,4k^{2} + 8)\\).\n(b) The coordinates of \\(B\\) are \\((2k,8k^{2} + 16)\\). Note that \\(AM:MB = 1:3\\Rightarrow M = \\left( \\frac{3( - 2k) + (2k)}{1 + 3},\\frac{3(4k^{2} + 8) + (8k^{2} + 16)}{1 + 3} \\right) = ( - k,5k^{2} + 10)\\)."
      },
      {
        id: "fg-c-ex8",
        type: "Applications of Completing Square",
        question: "[Level 2]\nThe coordinates of the vertex \\(P\\) of the graph of the quadratic function \\(y = f(x)\\) are \\((p,16)\\). The graph cuts the \\(x\\)-axis at the origin \\(O\\) and \\(Q(8,0)\\). The points \\(A\\) and \\(B\\) are two distinct points lying on the graph, and their \\(y\\)-coordinates are both \\(7\\).\n(a) Find the value of \\(p\\). (b) Find \\(f(x)\\). (c) Find the distance between \\(A\\) and \\(B\\).\n(d) (i) Find the area of \\(\\bigtriangleup APB\\). (ii) If \\(C(c,0)\\) and \\(D(d,0)\\) are two points lying on the \\(x\\)-axis, where \\(d - c = 4\\), find the area of the pentagon \\(APBDC\\).",
        answer: "(a) \\(p = 4\\)\n(b) \\(f(x) = - (x - 4)^{2} + 16\\)\n(c) \\(6\\)\n(d)(i) \\(27\\)\n(d)(ii) \\(62\\)",
        steps: "(a) \\(p = \\frac{0 + 8}{2} = 4\\)\n(b) \\(f(x) = a(x - 4)^{2} + 16\\). Put \\((0,0)\\): \\(0 = 16a + 16\\Rightarrow a = - 1\\therefore\\) \\(f(x) = - (x - 4)^{2} + 16\\)\n(c) When \\(y = 7\\), \\(7 = - (x - 4)^{2} + 16\\Rightarrow (x - 4)^{2} = 9\\Rightarrow x = 1\\) or \\(x = 7\\therefore\\) Distance between \\(A\\) and \\(B = 7 - 1 =\\) \\(6\\)\n(d) (i) Area of \\(\\bigtriangleup APB = \\frac{6(16 - 7)}{2} =\\) \\(27\\). (ii) Area of trapezium \\(ABDC = \\frac{(6 + 4)(7)}{2} = 35\\therefore\\) Area of pentagon \\(APBDC = 27 + 35 =\\) \\(62\\)."
      },
      {
        id: "fg-c-ex9",
        type: "Applications of Completing Square",
        question: "[Level 2] [2526-WYK-S4-Midyear-I-Q10]\nLet \\(p(x) = x^{2} - 6x + k + 15\\), where \\(k\\) is a constant. Denote the vertex of the graph of \\(y = p(x)\\) by \\(V\\).\n(a) Using the method of completing the square, express the coordinates of \\(V\\) in terms of \\(k\\).\n(b) Let \\(U\\) be the vertex of the graph of \\(y = - p(x - k)\\). (i) Write down the coordinates of \\(U\\) in terms of \\(k\\). (ii) The coordinates of the point \\(W\\) are \\((2,0)\\). Is it possible that \\(\\angle UWV\\) is a right angle? Explain your answer.",
        answer: "(a) \\(V = (3,k + 6)\\)\n(b)(i) \\(U = (k + 3, - k - 6)\\)\n(b)(ii) No. \\(\\angle UWV\\) cannot be a right angle.",
        steps: "(a) \\(p(x) = (x^{2} - 6x + 3^{2}) - 3^{2} + k + 15 = (x - 3)^{2} + k + 6\\). The coordinates of \\(V\\) are \\((3,k + 6)\\).\n(b) (i) The coordinates of \\(U\\) are \\((k + 3, - k - 6)\\).\n(ii) Slope of \\(WU \\times\\) Slope of \\(WV = - 1\\Rightarrow \\frac{- k - 6 - 0}{k + 3 - 2} \\times \\frac{k + 6 - 0}{3 - 2} = - 1\\Rightarrow (k + 6)^{2} = k + 1\\Rightarrow k^{2} + 11k + 35 = 0\\). \\(\\Delta = 11^{2} - 4(1)(35) = - 19 < 0\\). When \\(k = - 1\\), \\(WU\\) is vertical while \\(WV\\) is not horizontal. \\(\\therefore\\angle UWV\\) cannot be a right angle."
      },
      {
        id: "fg-c-ex10",
        type: "Applications of Completing Square",
        question: "[Level 3]\nLet \\(f(x) = 3x^{2} - kx - 4x + k\\), where \\(k\\) is a positive constant. Denote the vertex of the graph of \\(y = f(x)\\) by \\(V\\).\n(a) Prove that the graph of \\(y = f(x)\\) cuts the \\(x\\)-axis at two distinct points.\n(b) Using the method of completing the square, express the coordinates of \\(V\\) in terms of \\(k\\).\n(c) It is given that \\(R(r,8)\\) and \\(S(s,8)\\) are two points lying on the graph of \\(y = f(x)\\). (i) Show that \\(9(r - s)^{2} = k^{2} - 4k + 112\\). (ii) If the distance between \\(V\\) and the line segment \\(RS\\) is \\(12\\), find the equation of the axis of symmetry of the graph of \\(y = f(x)\\).",
        answer: "(a) \\(\\Delta = (k - 2)^{2} + 12 \\geq 12 > 0\\), so the graph cuts the \\(x\\)-axis at two distinct points.\n(b) \\(V\\left( \\frac{k + 4}{6},\\frac{- k^{2} + 4k - 16}{12} \\right)\\)\n(c)(i) \\(9(r - s)^{2} = k^{2} - 4k + 112\\) (shown)\n(c)(ii) The axis of symmetry is \\(x = 2\\).",
        steps: "(a) \\(\\Delta = ( - (k + 4))^{2} - 4(3)(k) = k^{2} - 4k + 16 = (k - 2)^{2} + 12 \\geq 12 > 0\\). \\(y = f(x)\\) cuts the \\(x\\)-axis at two distinct points.\n(b) \\(f(x) = 3\\left( x - \\frac{k + 4}{6} \\right)^{2} + \\frac{- k^{2} + 4k - 16}{12}\\). Coordinates of \\(V\\): \\(\\left( \\frac{k + 4}{6},\\frac{- k^{2} + 4k - 16}{12} \\right)\\).\n(c) (i) \\(r,s\\) are roots of \\(3x^{2} - (k + 4)x + (k - 8) = 0\\). \\(9(r - s)^{2} = 9\\lbrack(r + s)^{2} - 4rs\\rbrack = 9\\left\\lbrack \\left( \\frac{k + 4}{3} \\right)^{2} - 4\\left( \\frac{k - 8}{3} \\right) \\right\\rbrack = k^{2} - 4k + 112\\).\n(ii) \\(8 - \\frac{- k^{2} + 4k - 16}{12} = 12\\Rightarrow k^{2} - 4k - 32 = 0\\Rightarrow k = 8\\) or \\(k = - 4\\) (rej.). AOS: \\(x = \\frac{k + 4}{6}\\), i.e. \\(x = 2\\)."
      },
      {
        id: "fg-c-ex11",
        type: "Centers of Triangle",
        question: "[Level 2 \u2013 Centroid]\nLet \\(f(x) = 2x^{2} + 8kx + 8k^{2} + 2k - 1\\), where \\(k > 1\\). Denote the coordinates of the vertex of the graph of \\(y = f(x)\\) by \\(P\\).\n(a) Using the method of completing the square, express the coordinates of \\(P\\) in terms of \\(k\\).\n(b) In a rectangular coordinate system, the point \\(Q\\) is formed by reflecting \\(P\\) in the \\(y\\)-axis and then translating upward by \\(k\\) units. Denote the origin by \\(O\\). (i) Write down the coordinates of \\(Q\\). (ii) It is given that the \\(y\\)-coordinate of the centroid of \\(\\bigtriangleup OPQ\\) is \\(6\\). Find the area of \\(\\bigtriangleup OPQ\\).",
        answer: "(a) \\(P = ( - 2k,2k - 1)\\)\n(b)(i) \\(Q = (2k,3k - 1)\\)\n(b)(ii) Area of \\(\\bigtriangleup OPQ = 72\\)",
        steps: "(a) \\(f(x) = 2(x^{2} + 4kx + 4k^{2} - 4k^{2}) + 8k^{2} + 2k - 1 = 2(x + 2k)^{2} + 2k - 1\\). Coordinates of \\(P\\): \\(( - 2k,2k - 1)\\).\n(b) (i) Coordinates of \\(Q\\): \\((2k,3k - 1)\\). (ii) \\(\\frac{0 + (2k - 1) + (3k - 1)}{3} = 6\\Rightarrow 5k = 20\\Rightarrow k = 4\\).\n\\(P( - 8,7),Q(8,11)\\), centroid \\(G(0,6)\\). \\(PQ\\) cuts \\(y\\)-axis at \\(T(0,9)\\). Area of \\(\\bigtriangleup OPQ = \\frac{1}{2}(9 - 0)\\lbrack 8 - ( - 8)\\rbrack = 72\\).\nAlternative: Area of \\(\\bigtriangleup OGP = \\frac{1}{2}(6)(8) = 24\\Rightarrow \\) Area of \\(\\bigtriangleup OPQ = 24 \\times \\frac{2 + 1}{2} \\times 2 = 72\\)."
      },
      {
        id: "fg-c-ex12",
        type: "Centers of Triangle",
        question: "[Level 2 \u2013 Circumcenter] [2020-DSE-I-Q17]\nLet \\(g(x) = x^{2} - 2kx + 2k^{2} + 4\\), where \\(k\\) is a real constant.\n(a) Using the method of completing the square, express the coordinates of the vertex of the graph of \\(y = g(x)\\) in terms of \\(k\\).\n(b) On the same rectangular coordinate system, let \\(D\\) and \\(E\\) be the vertex of the graph of \\(y = g(x + 2)\\) and the vertex of the graph of \\(y = - g(x - 2)\\) respectively. Is there a point \\(F\\) on this rectangular coordinate system such that the coordinates of the circumcenter of \\(\\bigtriangleup DEF\\) are \\((0,3)\\)? Explain your answer.",
        answer: "(a) \\((k,k^{2} + 4)\\)\n(b) No. There is no such point \\(F\\).",
        steps: "(a) \\(g(x) = (x - k)^{2} + k^{2} + 4\\). Coordinates of vertex: \\((k,k^{2} + 4)\\).\n(b) \\(D(k - 2,k^{2} + 4)\\) and \\(E(k + 2, - k^{2} - 4)\\). Let \\(C(0,3)\\): \\(CD^{2} = ((k - 2) - 0)^{2} + ((k^{2} + 4) - 3)^{2} = k^{4} + 3k^{2} - 4k + 5\\), \\(CE^{2} = (k + 2)^{2} + ( - k^{2} - 7)^{2} = k^{4} + 15k^{2} + 4k + 53\\).\n\\(CD^{2} = CE^{2}\\Rightarrow 3k^{2} + 2k + 12 = 0\\), \\(\\Delta = 2^{2} - 4(3)(12) = - 140 < 0\\). No real root for \\(k\\), so there is no such point \\(F\\)."
      },
      {
        id: "fg-c-ex13",
        type: "Centers of Triangle",
        question: "[Level 2 \u2013 Orthocenter + Centroid] [2526-WYK-S5-Midyear-I-Q19]\nLet \\(f(x) = - \\frac{1}{2}x^{2} + 10kx - 51k^{2}\\), where \\(k\\) is a positive real constant. Denote the vertex of the graph of \\(y = f(x)\\) by \\(P\\).\n(a) Does the graph of \\(y = f(x)\\) cuts the \\(x\\)-axis? Explain your answer.\n(b) Using the method of completing the square, express the coordinates of \\(P\\) in terms of \\(k\\).\n(c) \\(P\\) is translated upwards to the point \\(Q\\). Denote the origin by \\(O\\). It is given that the orthocentre of \\(\\bigtriangleup OPQ\\) is \\(O\\) and the centroid of \\(\\bigtriangleup OPQ\\) lies on the \\(x\\)-axis. (i) Find the coordinates of \\(Q\\). (ii) The coordinates of the points \\(R\\) and \\(S\\) are \\((t,2t)\\) and \\((t - 100,t - 30)\\) respectively, where \\(t\\) is a real number. Is it possible that \\(OQRS\\) is a parallelogram? Explain your answer.",
        answer: "(a) No. \\(\\Delta = - 2k^{2} < 0\\), so the graph does not cut the \\(x\\)-axis.\n(b) \\(P = (10k, - k^{2})\\)\n(c)(i) \\(Q = (100,100)\\)\n(c)(ii) Yes, it is possible that \\(OQRS\\) is a parallelogram (when \\(t = 70\\)).",
        steps: "(a) \\(\\Delta = (10k)^{2} - 4\\left( - \\frac{1}{2} \\right)( - 51k^{2}) = - 2k^{2} < 0\\). The graph of \\(y = f(x)\\) does not cut the \\(x\\)-axis.\n(b) \\(f(x) = - \\frac{1}{2}(x - 10k)^{2} - k^{2}\\). Coordinates of \\(P\\): \\((10k, - k^{2})\\).\n(c) (i) Centroid on \\(x\\)-axis \\(\\Rightarrow Q(10k,k^{2})\\). Orthocentre is \\(O\\Rightarrow OP\\bot OQ\\Rightarrow \\frac{- k^{2}}{10k} \\times \\frac{k^{2}}{10k} = - 1\\Rightarrow k = 10\\Rightarrow Q(100,100)\\).\n(ii) Slope of \\(OQ = 1\\), Slope of \\(SR = \\frac{t + 30}{100} = 1\\Rightarrow t = 70\\). When \\(t = 70\\), \\(SR = \\sqrt{100^{2} + 100^{2}} = \\sqrt{20000} = OQ\\) and \\(OQ \\parallel SR\\therefore\\) It is possible that \\(OQRS\\) is a parallelogram."
      },
      {
        id: "fg-c-ex14",
        type: "Centers of Triangle",
        question: "[Level 2 \u2013 Circumcenter]\nLet \\(g(x) = \\frac{1}{k}x^{2} - 2x + 3k - 1\\), where \\(k\\) is a positive integer. Denote the vertex of \\(y = g(x)\\) be \\(V\\). It is given that the coordinates of \\(R\\) are \\(( - 2,2)\\).\n(a) Using the method of completing the square, express the coordinates of \\(V\\) in terms of \\(k\\).\n(b) \\(V\\) is first translated to the left \\(2\\) units and then reflected about the \\(x\\)-axis to \\(P\\). The coordinates of \\(Q\\) are \\((8 - k,2k - 1)\\). It is given that the coordinates of the circumcentre of \\(\\bigtriangleup PQR\\) are \\((3,0)\\). (i) Find \\(k\\). (ii) Show that \\(\\bigtriangleup PQR\\) is a right-angled triangle. Hence, find the area of \\(\\bigtriangleup PQR\\).",
        answer: "(a) \\(V = (k,2k - 1)\\)\n(b)(i) \\(k = 3\\)\n(b)(ii) \\(\\bigtriangleup PQR\\) is right-angled at \\(R\\). Area of \\(\\bigtriangleup PQR = 29\\).",
        steps: "(a) \\(g(x) = \\frac{1}{k}(x - k)^{2} + 2k - 1\\Rightarrow V(k,2k - 1)\\).\n(b) (i) \\(P(k - 2,1 - 2k),Q(8 - k,2k - 1),R( - 2,2)\\). Let \\(S(3,0)\\): \\(PS = RS\\Rightarrow \\sqrt{(k - 5)^{2} + (1 - 2k)^{2}} = \\sqrt{( - 2 - 3)^{2} + (2 - 0)^{2}}\\Rightarrow 5k^{2} - 14k - 3 = 0\\Rightarrow k = 3\\) or \\(k = \\frac{1}{5}\\) (rej.).\n(ii) \\(P(1, - 5),Q(5,5)\\). Mid-point of \\(PQ = (3,0) = S\\) (circumcentre), so \\(\\bigtriangleup PQR\\) is right-angled at \\(R\\) (\\(PR\\bot QR\\)). Area of \\(\\bigtriangleup PQR = \\frac{1}{2}\\sqrt{7^{2} + 3^{2}} \\times \\sqrt{3^{2} + ( - 7)^{2}} = 29\\).\nAlternative: Slope of \\(PR \\times\\) Slope of \\(QR = \\frac{- 7}{3} \\times \\frac{3}{7} = - 1\\therefore PR\\bot QR\\)."
      },
      {
        id: "fg-c-ex15",
        type: "Centers of Triangle",
        question: "[Level 3 \u2013 Orthocenter + Circumcenter]\nLet \\(f(x) = 2x^{2} + 4(k - 4)x + 8k - 37\\) for real constants \\(k\\). Denote the point \\(( - 2,3)\\) by \\(P\\). \\(Q\\) is the vertex of the graph of \\(y = f(x)\\).\n(a) Prove that the graph of \\(y = f(x)\\) always passes through \\(P\\).\n(b) Using the method of completing the square, express the coordinates of \\(Q\\) in terms of \\(k\\).\n(c) \\(P\\) is translated rightwards by \\(27\\) units and is then translated downwards by \\(9\\) units to the point \\(R\\). It is given that the orthocentre of \\(\\bigtriangleup PQR\\) is \\(H(9, - 8)\\). (i) Write down the coordinates of \\(R\\). (ii) Find \\(k\\). (iii) \\(QH\\) is produced to meet \\(PR\\) at \\(T\\). Andy claims that \\(T\\) is possible to the circumcenter of a triangle where two of the vertices are \\(P\\) and \\(R\\). Is his claim correct? Explain your answer.",
        answer: "(a) \\(f( - 2) = 3\\), so the graph always passes through \\(P\\).\n(b) \\(Q = (4 - k, - 2k^{2} + 24k - 69)\\)\n(c)(i) \\(R = (25, - 6)\\)\n(c)(ii) \\(k = 2\\)\n(c)(iii) Andy\\'s claim is incorrect.",
        steps: "(a) \\(f( - 2) = 2( - 2)^{2} + 4(k - 4)( - 2) + 8k - 37 = 8 - 8k + 32 + 8k - 37 = 3\\). Always passes through \\(P\\).\n(b) \\(f(x) = 2(x + k - 4)^{2} - 2k^{2} + 24k - 69\\Rightarrow Q(4 - k, - 2k^{2} + 24k - 69)\\).\n(c) (i) \\(R(25, - 6)\\). (ii) Slope of \\(PR \\times\\) Slope of \\(QH = - 1\\Rightarrow \\frac{9}{- 27} \\times \\frac{- 2k^{2} + 24k - 61}{- k - 5} = - 1\\Rightarrow 2k^{2} - 27k + 46 = 0\\Rightarrow k = 2\\) or \\(\\frac{23}{2}\\). Checking \\(PH\\bot QR\\) rejects \\(k = \\frac{23}{2}\\therefore k = 2\\).\n(iii) \\(HP = \\sqrt{11^{2} + ( - 11)^{2}} = 11\\sqrt{2}\\), \\(HR = \\sqrt{( - 16)^{2} + ( - 2)^{2}} = \\sqrt{260} \\neq HP\\). Since \\(PR\\bot QH\\), \\(T\\) does not lie on the perpendicular bisector of \\(PR\\), so \\(PT \\neq RT\\). The claim is incorrect."
      },
      {
        id: "fg-c-ex16",
        type: "Centers of Triangle",
        question: "[Level 3 \u2013 Incenter + Circumcenter]\nLet \\(f(x) = x^{2} + 6kx + 10k^{2} + 5\\), where \\(k\\) is a constant. On the rectangular coordinate plane, let \\(P,Q\\) and \\(R\\) be the vertex of the graph of \\(y = f(x - 6)\\), the vertex of the graph of \\(y = f(6 - x)\\) and the vertex of \\(y = 6 - f(x)\\) respectively.\n(a) (i) Using the method of completing the square, express the coordinates of the vertex of \\(y = f(x)\\) in terms of \\(k\\). (ii) Hence, express the coordinates of \\(P,Q\\) and \\(R\\) in terms of \\(k\\).\n(b) A student claims that there is a point \\(T\\) on the rectangular coordinate plane such that the origin \\(O\\) is the circumcentre of \\(\\bigtriangleup QRT\\). Do you agree? Explain your answer.\n(c) The coordinates of \\(S\\) are \\((6,k^{2} - 4k + 5)\\). Denote the inscribed circle of \\(\\bigtriangleup PQS\\) by \\(C\\) and the incentre of \\(\\bigtriangleup PQS\\) by \\(G\\). It is given that the circle \\(C\\) touches \\(PS\\) and \\(PQ\\) at \\(A\\) and \\(B\\) respectively. \\(SGB\\) is a straight line and \\(GA\\) is perpendicular to \\(PS\\). (i) Prove that \\(\\bigtriangleup SGA \\sim \\bigtriangleup SPB\\). (ii) Express the coordinates of \\(G\\) in terms of \\(k\\).",
        answer: "(a)(i) \\(( - 3k,k^{2} + 5)\\)\n(a)(ii) \\(P(6 - 3k,k^{2} + 5)\\), \\(Q(6 + 3k,k^{2} + 5)\\), \\(R( - 3k, - k^{2} + 1)\\)\n(b) Disagree. There is no such point \\(T\\).\n(c)(i) \\(\\bigtriangleup SGA \\sim \\bigtriangleup SPB\\) (proved)\n(c)(ii) \\(G = \\left( 6,k^{2} - \\frac{3}{2}k + 5 \\right)\\)",
        steps: "(a) (i) \\(f(x) = (x + 3k)^{2} + k^{2} + 5\\Rightarrow ( - 3k,k^{2} + 5)\\). (ii) \\(P(6 - 3k,k^{2} + 5),Q(6 + 3k,k^{2} + 5),R( - 3k, - k^{2} + 1)\\).\n(b) \\(OR = OQ\\Rightarrow ( - 3k)^{2} + ( - k^{2} + 1)^{2} = (3k + 6)^{2} + (k^{2} + 5)^{2}\\Rightarrow k^{2} + 3k + 5 = 0\\), \\(\\Delta = - 11 < 0\\). Point \\(T\\) does not exist (disagree).\n(c) (i) \\(PS^{2} = (3k)^{2} + (4k)^{2} = 25k^{2} = QS^{2}\\Rightarrow \\bigtriangleup PQS\\) is isosceles, so \\(SGB\\bot PQ\\). \\(\\angle SBP = \\angle SAG = 90^{\\circ}\\) and \\(\\angle BSP = \\angle ASG\\Rightarrow \\bigtriangleup SBP \\sim \\bigtriangleup SAG\\) (A.A.).\n(ii) Let \\(r\\) be radius of \\(C\\), \\(G(6,k^{2} + 5 - r)\\). \\(\\frac{SP}{SG} = \\frac{BP}{AG}\\Rightarrow \\frac{5k}{4k - r} = \\frac{3k}{r}\\Rightarrow r = \\frac{3}{2}k\\Rightarrow G\\left( 6,k^{2} - \\frac{3}{2}k + 5 \\right)\\)."
      },
      // ---- D) Coordinate Geometry & Special Lines and Centers ----
      // NOTE: the Word file has no solution for this question; the answer and working were worked out separately - please check.
      {
        id: "fg-d-eg1",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "Find the distance, slope, coordinates of mid-point and coordinates of the point which divides \\(AB\\) into ratio of \\(3:1\\) of the following coordinates \\(A\\) and \\(B\\).\na) \\(A = (3,5);B = (9,13)\\)\nb) \\(A = ( - 3,4);B = ( - 8, - 1)\\)",
        answer: "(a) Distance \\(= 10\\), slope \\(= \\frac{4}{3}\\), mid-point \\(= (6,9)\\), dividing point \\(= (7.5,11)\\)\n(b) Distance \\(= 5\\sqrt{2}\\), slope \\(= 1\\), mid-point \\(= ( - 5.5,1.5)\\), dividing point \\(= ( - 6.75,0.25)\\)",
        steps: "(a) Distance \\(= \\sqrt{(9 - 3)^{2} + (13 - 5)^{2}} = \\sqrt{100} = 10\\); slope \\(= \\frac{13 - 5}{9 - 3} = \\frac{4}{3}\\); mid-point \\(= \\left( \\frac{3 + 9}{2},\\frac{5 + 13}{2} \\right) = (6,9)\\); point dividing \\(AB\\) in the ratio \\(3:1\\) \\(= \\left( \\frac{1(3) + 3(9)}{4},\\frac{1(5) + 3(13)}{4} \\right) = (7.5,11)\\).\n(b) Distance \\(= \\sqrt{( - 8 + 3)^{2} + ( - 1 - 4)^{2}} = \\sqrt{50} = 5\\sqrt{2}\\); slope \\(= \\frac{- 1 - 4}{- 8 + 3} = 1\\); mid-point \\(= \\left( \\frac{- 3 - 8}{2},\\frac{4 - 1}{2} \\right) = ( - 5.5,1.5)\\); point dividing \\(AB\\) in the ratio \\(3:1\\) \\(= \\left( \\frac{1( - 3) + 3( - 8)}{4},\\frac{1(4) + 3( - 1)}{4} \\right) = ( - 6.75,0.25)\\)."
      },
      // NOTE: the Word file has no solution for this question; the answer and working were worked out separately - please check.
      {
        id: "fg-d-eg2",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "In the figure, \\(G\\) is the centroid of \\(\\bigtriangleup ABC\\). \\(D\\) and \\(E\\) are points lying on \\(BC\\) and \\(AC\\) respectively such that \\(AD\\) and \\(BE\\) intersect at point \\(G\\). If \\(AD\\bot BC\\), \\(BC = 10\\ cm\\) and \\(AE = 6.5\\ cm\\), find \\(DG\\).",
        images: [{ src: "images/fg-d-eg2.png", width: 154 }],
        answer: "\\(DG = 4\\ cm\\)",
        steps: "\\(G\\) is the centroid, so \\(AD\\) and \\(BE\\) are medians: \\(D\\) is the mid-point of \\(BC\\) and \\(E\\) is the mid-point of \\(AC\\).\n\\(BD = \\frac{10}{2} = 5\\ cm\\) and \\(AC = 2 \\times 6.5 = 13\\ cm\\).\n\\(AD\\bot BC\\) and \\(D\\) is the mid-point of \\(BC\\), so \\(AB = AC = 13\\ cm\\).\n\\(AD = \\sqrt{13^{2} - 5^{2}} = 12\\ cm\\), and \\(DG = \\frac{1}{3}AD = 4\\ cm\\)."
      },
      // NOTE: the Word file has no solution for this question; the answer and working were worked out separately - please check.
      {
        id: "fg-d-eg3",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "In the figure, \\(H\\) is the orthocentre of \\(\\bigtriangleup ABC\\). If \\(\\angle HAC = 25^{\\circ}\\) and \\(\\angle HCA = 35^{\\circ}\\), find \\(\\angle ABC\\).",
        images: [{ src: "images/fg-d-eg3.png", width: 154 }],
        answer: "\\(\\angle ABC = 60^{\\circ}\\)",
        steps: "\\(AH\\) is perpendicular to \\(BC\\), so \\(\\angle ACB = 90^{\\circ} - \\angle HAC = 90^{\\circ} - 25^{\\circ} = 65^{\\circ}\\).\n\\(CH\\) is perpendicular to \\(AB\\), so \\(\\angle BAC = 90^{\\circ} - \\angle HCA = 90^{\\circ} - 35^{\\circ} = 55^{\\circ}\\).\n\\(\\angle ABC = 180^{\\circ} - 65^{\\circ} - 55^{\\circ} = 60^{\\circ}\\)."
      },
      // NOTE: the Word file has no solution for this question; the answer and working were worked out separately - please check.
      {
        id: "fg-d-eg4",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "In the figure, \\(H\\) is the orthocentre of \\(\\bigtriangleup PQR\\). \\(PH\\) and \\(RH\\) are produced to meet \\(QR\\) and \\(PQ\\) at \\(S\\) and \\(T\\) respectively. Find \\(RT\\).",
        images: [{ src: "images/fg-d-eg4.png", width: 173 }],
        answer: "\\(RT = 15\\ cm\\)",
        steps: "From the figure, \\(PS = 15\\ cm\\), \\(QS = 8\\ cm\\) and \\(SR = 9\\ cm\\), so \\(QR = 17\\ cm\\).\n\\(PQ = \\sqrt{15^{2} + 8^{2}} = 17\\ cm\\).\nArea of \\(\\bigtriangleup PQR = \\frac{1}{2} \\times QR \\times PS = \\frac{1}{2} \\times 17 \\times 15 = 127.5\\ cm^{2}\\).\n\\(RT\\bot PQ\\), so area of \\(\\bigtriangleup PQR = \\frac{1}{2} \\times PQ \\times RT\\Rightarrow RT = \\frac{2 \\times 127.5}{17} = 15\\ cm\\)."
      },
      {
        id: "fg-d-ex1",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "The figure shows \\(\\bigtriangleup ABC\\), where \\(P\\) is the centroid. Find the coordinates of \\(C\\).\nA. \\((10, - 1)\\) B. \\((10,7)\\) C. \\((20,4)\\) D. \\((20,7)\\)",
        images: [{ src: "images/fg-d-ex1.png", width: 173 }],
        answer: "D",
        steps: "Let \\(C\\) be \\((a,b)\\). \\(\\frac{7 + 0 + a}{3} = 9 \\rightarrow a = 20\\); \\(\\frac{8 - 9 + b}{3} = 2 \\rightarrow b = 7\\) (D)"
      },
      {
        id: "fg-d-ex2",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2017-DSE-II-Q41]\nLet \\(O\\) be the origin. The coordinates of the points \\(P\\) and \\(Q\\) are \\((p,0)\\) and \\((0,q)\\) respectively, where \\(p\\) and \\(q\\) are positive numbers. If the in-centre of \\(\\bigtriangleup OPQ\\) lies on the straight line \\(3x + 4y = 3p\\), then \\(p:q =\\)\nA. \\(2:3\\) B. \\(4:3\\) C. \\(4:9\\) D. \\(7:24\\)",
        answer: "D",
        steps: "\\(\\bigtriangleup OPQ\\) is a right-angled triangle. Let the in-center be \\(I(r,r)\\). \\(3(r) + 4(r) = 3p\\Rightarrow r = \\frac{3}{7}p\\).\n\\((p + q + \\sqrt{p^{2} + q^{2}})\\left( \\frac{3}{7}p \\right) = pq\\Rightarrow 3\\sqrt{p^{2} + q^{2}} = 4q - 3p\\Rightarrow 7q^{2} = 24pq\\Rightarrow \\frac{p}{q} = \\frac{7}{24}\\) (D)\nNote: S5 Chapter 2 \"Tangent Properties\" help you finish this question quicker."
      },
      {
        id: "fg-d-ex3",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2018-DSE-II-Q40]\nIt is given that \\(a\\) is a positive constant. The straight line \\(2x + 5y = a\\) cuts the \\(x\\)-axis and the \\(y\\)-axis at the points \\(P\\) and \\(Q\\) respectively. Let \\(R\\) be a point lying on the \\(y\\)-axis such that the \\(x\\)-coordinate of the orthocentre of \\(\\bigtriangleup PQR\\) is \\(10\\). Find the \\(y\\)-coordinate of \\(R\\).\nA. \\(- 25\\) B. \\(- 4\\) C. \\(4\\) D. \\(25\\)",
        answer: "A",
        steps: "\\(P\\left( \\frac{a}{2},0 \\right),Q\\left( 0,\\frac{a}{5} \\right),R(0,k)\\). Since \\(QR\\) is vertical, altitude from \\(P\\) is horizontal \\(\\Rightarrow H(10,0)\\).\n\\(m_{PQ} = - \\frac{2}{5}\\Rightarrow \\) slope of altitude from \\(R\\) to \\(PQ = \\frac{5}{2}\\Rightarrow \\frac{0 - k}{10 - 0} = \\frac{5}{2}\\Rightarrow k = - 25\\) (A)"
      },
      {
        id: "fg-d-ex4",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2020-DSE-II-Q41]\nThe equations of the three sides of a triangle are \\(4x - 3y = 24\\), \\(4x + 3y = 24\\) and \\(x = a\\), where \\(a\\) is a constant. If the \\(x\\)-coordinate of the incentre of the triangle is \\(31\\), then \\(a =\\)\n[This question is suggested to be finished after Chapter 4]\nA. \\(15\\) B. \\(31\\) C. \\(45\\) D. \\(51\\)",
        answer: "D",
        steps: "Intersection of the two sides: \\((6,0)\\). Note that \\(x\\)-axis is one of the angle bisectors. Let acute angle between \\(L_{1}\\) and \\(x\\)-axis be \\(\\theta\\), inscribed radius \\(= r\\). \\(\\tan\\theta = \\frac{4}{3} \\rightarrow \\sin\\theta = \\frac{4}{5}\\). \\(\\sin\\theta = \\frac{r}{31 - 6}\\Rightarrow r = 20\\Rightarrow a = 31 + 20 = 51\\) (D)",
        stepsImages: [{ src: "images/fg-d-ex4-sol.png", width: 173 }]
      },
      {
        id: "fg-d-ex5",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2021-DSE-II-Q41]\nLet \\(O\\) be the origin. The coordinates of the point \\(P\\) are \\((26, - 18)\\). If the coordinates of the orthocentre of \\(\\bigtriangleup OPQ\\) are \\((21, - 3)\\), then the \\(y\\)-coordinate of \\(Q\\) is\nA. \\(- 30\\) B. \\(- 10\\) C. \\(10\\) D. \\(30\\)",
        answer: "C",
        steps: "Note that \\(Q\\) is the orthocenter of \\(O,P\\) and \\(H(21, - 3)\\).\nAltitude from \\(P\\) to \\(OH\\): \\(y = 7x - 200\\); Altitude from \\(H\\) to \\(OP\\): \\(y = \\frac{13}{9}x - \\frac{100}{3}\\). Solving gives \\(x = 30,y = 10\\) (C)"
      },
      {
        id: "fg-d-ex6",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2022-DSE-II-Q41]\nLet \\(O\\) be the origin. The coordinates of the points \\(A\\) and \\(B\\) are \\((a,0)\\) and \\((0,b)\\) respectively, where \\(a\\) and \\(b\\) are positive numbers. If the circumcentre of \\(\\bigtriangleup OAB\\) lies on the graph of the equation \\(4x + 16y = 17a\\), then \\(a:b =\\)\nA. \\(8:15\\) B. \\(15:8\\) C. \\(16:47\\) D. \\(47:16\\)",
        answer: "A",
        steps: "Note that \\(\\bigtriangleup OAB\\) is a right-angled triangle. Circumcentre \\(= \\left( \\frac{a}{2},\\frac{b}{2} \\right)\\).\n\\(4\\left( \\frac{a}{2} \\right) + 16\\left( \\frac{b}{2} \\right) = 17a\\Rightarrow 8b = 15a\\Rightarrow \\frac{a}{b} = \\frac{8}{15}\\) (A)",
        stepsImages: [{ src: "images/fg-d-ex6-sol.png", width: 154 }]
      },
      {
        id: "fg-d-ex7",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2023-DSE-II-Q41]\nThe equations of the straight lines \\(L_{1}\\) and \\(L_{2}\\) are \\(3x - 4y + k = 0\\), \\(4x + 3y - k = 0\\) respectively, where \\(k\\) is a positive constant. It is given that \\(L_{1}\\) cuts the \\(x\\)-axis at the point \\(P\\). Denote the point of intersection of \\(L_{1}\\) and \\(L_{2}\\) by \\(Q\\). If \\(R\\) is a point lying on \\(L_{2}\\) such that the in-centre of \\(\\angle PQR\\) lies on the \\(x\\)-axis, then the \\(x\\)-coordinate of \\(R\\) is [This question is suggested to be finished after Chapter 4]\nA. \\(- 7k\\) B. \\(- k\\) C. \\(k\\) D. \\(7k\\)",
        answer: "C",
        steps: "Note that \\(L_{1}\\bot L_{2}\\) and \\(P\\left( - \\frac{k}{3},0 \\right)\\). Since \\(x\\)-axis is an angle bisector, slope of \\(L_{3} = -\\) slope of \\(L_{1} = - \\frac{3}{4}\\Rightarrow 3x + 4y + k = 0\\). Joining \\(L_{2}\\) and \\(L_{3}\\), we have \\(R(k, - k)\\) (C)",
        stepsImages: [{ src: "images/fg-d-ex7-sol.png", width: 178 }]
      },
      {
        id: "fg-d-ex8",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[2025-DSE-II-Q41]\nDenote the origin by \\(O\\). The coordinates of the point \\(U\\) are \\((20,0)\\). Let \\(V\\) be a point lying on the positive \\(y\\)-axis such that the \\(x\\)-coordinate of the in-centre of \\(\\bigtriangleup OUV\\) is \\(6\\). Find the area of \\(\\bigtriangleup OUV\\).\nA. \\(70\\) B. \\(87\\) C. \\(210\\) D. \\(250\\)",
        answer: "C",
        steps: "Let \\(V(0,b)\\), radius of inscribed circle \\(= 6\\). \\((20 + b + \\sqrt{400 + b^{2}})(6) = 2(10b)\\Rightarrow 40b^{2} - 840b = 0\\Rightarrow b = 21\\Rightarrow \\) Area \\(= 10(21) = 210\\) (C)\nNote: S5 Chapter 2 \"Tangent Properties\" help you finish this question quicker."
      },
      {
        id: "fg-d-ex9",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "It is given that \\(k\\) is a positive constant. The straight line \\(3x + 4y = k\\) cuts the \\(x\\)-axis and the \\(y\\)-axis at the points \\(A\\) and \\(B\\) respectively. Denote the point \\((k,0)\\) by \\(C\\). If the coordinates of the circumcentre of \\(\\bigtriangleup ABC\\) is \\((h,38)\\), then \\(h =\\)\nA. \\(28\\) B. \\(32\\) C. \\(36\\) D. \\(48\\)",
        answer: "B",
        steps: "\\(A\\left( \\frac{k}{3},0 \\right),B\\left( 0,\\frac{k}{4} \\right)\\). Perpendicular bisector of \\(AC\\) has \\(x = \\frac{2k}{3}\\). \\(KA = KB\\Rightarrow \\left( \\frac{k}{3} \\right)^{2} + 38^{2} = \\left( \\frac{2k}{3} \\right)^{2} + \\left( 38 - \\frac{k}{4} \\right)^{2}\\Rightarrow k = 48\\Rightarrow h = \\frac{2}{3}(48) = 32\\) (B)"
      },
      {
        id: "fg-d-ex10",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "It is given that \\(k\\) is a positive constant. The straight line \\(4x + 3y = k\\) cuts the \\(x\\)-axis and the \\(y\\)-axis at the points \\(A\\) and \\(B\\) respectively. If the coordinates of the point \\(C\\) are \\((0, - 12)\\), then the \\(x\\)-coordinate of the orthocentre of \\(\\bigtriangleup ABC\\) is\nA. \\(- 16\\) B. \\(- 9\\) C. \\(9\\) D. \\(16\\)",
        answer: "D",
        steps: "\\(A\\left( \\frac{k}{4},0 \\right),B\\left( 0,\\frac{k}{3} \\right)\\). Let orthocenter \\(H(h,0)\\). \\(CH\\bot AB\\Rightarrow \\frac{0 - ( - 12)}{h - 0} \\times \\left( - \\frac{4}{3} \\right) = - 1\\Rightarrow h = 16\\) (D)"
      },
      {
        id: "fg-d-ex11",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "A straight line cuts the \\(x\\)-axis and the \\(y\\)-axis the points \\(M\\) and \\(N\\) at \\(- \\frac{k}{3}\\) and \\(\\frac{k}{5}\\) respectively, where \\(k\\) is a positive constant. Let \\(P\\) be a point lying on the \\(y\\)-axis such that the \\(x\\)-coordinate of the orthocenter of \\(\\bigtriangleup PMN\\) is \\(- 3\\). Find the \\(y\\)-coordinate of \\(P\\).\nA. \\(- \\frac{9}{5}\\) B. \\(- 5\\) C. \\(5\\) D. \\(\\frac{9}{5}\\)",
        answer: "B",
        steps: "Let \\(P(0,p)\\), orthocenter \\(H( - 3,0)\\). \\(PH\\bot MN\\Rightarrow \\frac{p - 0}{0 - ( - 3)} \\times \\left( \\frac{\\frac{k}{5} - 0}{0 + \\frac{k}{3}} \\right) = - 1\\Rightarrow \\frac{p}{3}\\left( \\frac{3}{5} \\right) = - 1\\Rightarrow p = - 5\\) (B)"
      },
      {
        id: "fg-d-ex12",
        type: "Coordinate Geometry & Special Lines and Centers",
        question: "[Challenging]\nThe equations of the three sides of a triangle are \\(5x - 2y - 28 = 0\\), \\(2x + 5y - 17 = 0\\) and \\(3x - 7y + k = 0\\), where \\(k\\) is a constant. It is given that orthocenter, the incenter and circumcenter of the triangle are collinear. If the \\(x\\)-coordinate of the circumcenter is same as the \\(y\\)-coordinate, then \\(k =\\) [This question is suggested to be finished after Chapter 4]\nA. \\(\\frac{9}{2}\\) B. \\(18\\) C. \\(45\\) D. \\(\\frac{225}{2}\\)",
        answer: "B",
        steps: "Intersection of \\(L_{1}\\) and \\(L_{2}\\) is \\(A(6,1)\\) with \\(L_{1}\\bot L_{2}\\). Let circumcenter be \\(B(b,b)\\) on \\(L_{3}\\): \\(3b - 7b + k = 0\\Rightarrow b = \\frac{k}{4}\\).\nSince isosceles right triangle, altitude from \\(A\\) to \\(L_{3}\\) passes through \\(B\\): \\(\\frac{\\frac{k}{4} - 1}{\\frac{k}{4} - 6} = - \\frac{7}{3}\\Rightarrow k = 18\\) (B)"
      }
    ]
  },
  m2: {
    // S.4 Extended Part Module 2 (S4_Math_4_M2_Editable.docx). Chapters 1-3 have no sub-sections, so they have no "type" lines.
    // ---- M2 Chapter 0: Basic Knowledge (Summation Notation & Odd/Even Functions) ----
    basic_knowledge: [
      {
        id: "m2-0a-sum1",
        type: "Summation and Product Notation",
        question: "Expand and evaluate the following sums.\n\\(\\sum_{r = 1}^{4}r^{2}\\)",
        answer: "\\(30\\)",
        steps: "\\(\\sum_{r = 1}^{4}r^{2} = 1^{2} + 2^{2} + 3^{2} + 4^{2} = 30\\)"
      },
      {
        id: "m2-0a-sum2",
        type: "Summation and Product Notation",
        question: "Expand and evaluate the following sums.\n\\(\\sum_{r = 1}^{4}{( - 1)^{r}(2r + 1)}\\)",
        answer: "\\(4\\)",
        steps: "\\(\\sum_{r = 1}^{4}{( - 1)^{r}(2r + 1)} = - (3) + (5) - (7) + (9) = 4\\)"
      },
      {
        id: "m2-0a-sum3",
        type: "Summation and Product Notation",
        question: "Expand and evaluate the following sums.\n\\(\\prod_{i = 0}^{4}2^{i}\\)",
        answer: "\\(1024\\)",
        steps: "\\(\\prod_{i = 0}^{4}2^{i} = 2^{0 + 1 + 2 + 3 + 4} = 2^{10} = 1024\\)"
      },
      {
        id: "m2-0a-sum4",
        type: "Summation and Product Notation",
        question: "Expand and evaluate the following sums.\n\\(\\prod_{r = 1}^{10}\\frac{r + 1}{r}\\)",
        answer: "\\(11\\)",
        steps: "\\(\\prod_{r = 1}^{10}\\frac{r + 1}{r} = \\frac{2 \\times 3 \\times 4 \\times \\ldots \\times 11}{1 \\times 2 \\times 3 \\times \\ldots \\times 10} = 11\\)"
      },
      {
        id: "m2-0a-sum5",
        type: "Summation and Product Notation",
        question: "Express \\(2^{3} + 3^{3} + 4^{3} + \\ldots + 8^{3}\\) using \\(\\sum_{}^{}\\ \\) notation.",
        answer: "\\(\\sum_{r = 2}^{8}r^{3}\\)",
        steps: "\\(2^{3} + 3^{3} + 4^{3} + \\ldots + 8^{3} = \\sum_{r = 2}^{8}r^{3}\\)"
      },
      {
        id: "m2-0a-sum6",
        type: "Summation and Product Notation",
        question: "Express \\(- 2 + 4 - 8 + 16\\) using \\(\\sum_{}^{}\\ \\) notation.",
        answer: "\\(\\sum_{r = 1}^{4}{( - 2)^{r}}\\)",
        steps: "\\(- 2 + 4 - 8 + 16 = \\sum_{r = 1}^{4}{( - 2)^{r}}\\)"
      },
      {
        id: "m2-0a-sum7",
        type: "Summation and Product Notation",
        question: "Express \\(1 \\times 3 \\times 5 \\times \\cdots \\times 99\\) using \\(\\prod_{}^{}\\ \\) notation.",
        answer: "\\(\\prod_{r = 1}^{50}{(2r - 1)}\\)",
        steps: "\\(1 \\times 3 \\times 5 \\times \\ldots \\times 99 = \\prod_{r = 1}^{50}{(2r - 1)}\\)"
      },
      {
        id: "m2-0a-sum8",
        type: "Summation and Product Notation",
        question: "Expand and evaluate the following sums.\n\\(\\prod_{r = 2}^{10}\\left( 1 - \\frac{1}{r} \\right)\\)",
        answer: "\\(\\frac{1}{10}\\)",
        steps: "\\(\\prod_{r = 2}^{10}\\left( 1 - \\frac{1}{r} \\right) = \\left( \\frac{1}{2} \\right)\\left( \\frac{2}{3} \\right)\\ldots\\left( \\frac{9}{10} \\right) = \\frac{1}{10}\\)"
      },
      {
        id: "m2-0a-sum9",
        type: "Summation and Product Notation",
        question: "Expand and evaluate the following sums.\n\\(\\sum_{k = 1}^{10}\\left( k + \\prod_{i = 1}^{5}i^{2} \\right)\\)",
        answer: "\\(144055\\)",
        steps: "\\(\\prod_{i = 1}^{5}i^{2} = (120)^{2} = 14400\\Rightarrow \\sum_{k = 1}^{10}{(k + 14400)} = \\frac{10(11)}{2} + 144000 = 144055\\)"
      },
      {
        id: "m2-0a-sum10",
        type: "Summation and Product Notation",
        question: "Express the sum to \\(n\\) terms of \\(- \\frac{4}{3} + \\frac{8}{9} - \\frac{16}{27} + \\ldots\\) using the \\(\\sum_{}^{}\\ \\) notation.",
        answer: "\\(2\\sum_{r = 1}^{n}{\\left( - \\frac{2}{3} \\right)^{r}}\\)",
        steps: "\\(- \\frac{4}{3} + \\frac{8}{9} - \\frac{16}{27} + \\ldots = 2\\sum_{r = 1}^{n}{\\left( - \\frac{2}{3} \\right)^{r}}\\)"
      },
      {
        id: "m2-0a-sum11",
        type: "Summation and Product Notation",
        question: "Given that \\(\\sum_{i = 1}^{10}X_{i} = 8\\) and \\(\\sum_{i = 1}^{10}Y_{i} = 12\\), find the value of \\(\\sum_{i = 1}^{10}{(2X_{i} - Y_{i})}\\).",
        answer: "\\(4\\)",
        steps: "\\(\\sum_{i = 1}^{10}{(2X_{i} - Y_{i})} = 2(8) - 12 = 4\\)"
      },
      {
        id: "m2-0a-sum12",
        type: "Summation and Product Notation",
        question: "[2324-WYK-S4-M2-UT1-Q1] (a) Prove that \\(\\sum_{k = 5}^{85}{\\sin^{2}k^{\\circ}} = \\sum_{k = 5}^{85}{\\cos^{2}k^{\\circ}}\\). (b) Hence, find the value of \\(\\sum_{k = 5}^{85}{\\sin^{2}k^{\\circ}}\\).",
        answer: "(a) Proved.\n(b) \\(\\frac{81}{2}\\)",
        steps: "(a) \\(\\sum_{k = 5}^{85}{\\sin^{2}k^{\\circ}} = \\cos^{2}85^{\\circ} + \\cos^{2}84^{\\circ} + \\ldots + \\cos^{2}5^{\\circ} = \\sum_{k = 5}^{85}{\\cos^{2}k^{\\circ}}\\). (b) \\(2\\sum_{k = 5}^{85}{\\sin^{2}k^{\\circ}} = \\sum_{k = 5}^{85}1 = 81\\Rightarrow \\sum_{k = 5}^{85}{\\sin^{2}k^{\\circ}} =\\) \\(\\frac{81}{2}\\)"
      },
      {
        id: "m2-0a-sum13",
        type: "Summation and Product Notation",
        question: "[2425-WYK-S4-M2-UT1-Q4] Given that \\(\\sum_{k = 1}^{n}k^{2} = \\frac{n(n + 1)(2n + 1)}{6}\\) for all \\(n \\in \\mathbf{N}\\). Evaluate (a) \\(\\sum_{k = 1000}^{2000}{(2k)^{2}}\\) and (b) \\(\\sum_{k = 1}^{2024}{(k + 1)^{2}}\\).",
        answer: "(a) \\(9343334000\\)\n(b) \\(2769972524\\)",
        steps: "(a) \\(4\\left\\lbrack \\frac{2000(2001)(4001)}{6} - \\frac{999(1000)(1999)}{6} \\right\\rbrack = 9343334000\\). (b) \\(\\frac{2024(2025)(4049)}{6} + 2\\frac{2024(2025)}{2} + 2024 = 2769972524\\) (Alternative: \\(\\sum_{j = 1}^{2025}{j^{2} - 1} = 2769972524\\))."
      },
      {
        id: "m2-0a-oe1",
        type: "Odd and Even Functions",
        question: "Determine whether \\(f(x)\\) is an odd function, an even function or neither of them.\n\\(f(x) = - \\frac{x^{3} + 1}{x^{4} + 8}\\)",
        answer: "Neither an odd function nor an even function.",
        steps: "\\(f( - x) = \\frac{x^{3} - 1}{x^{4} + 8}\\Rightarrow \\) Neither odd nor even function."
      },
      {
        id: "m2-0a-oe2",
        type: "Odd and Even Functions",
        question: "Determine whether \\(f(x)\\) is an odd function, an even function or neither of them.\n\\(f(x) = x^{5}\\sin^{4}x\\)",
        answer: "Odd function.",
        steps: "\\(f( - x) = - x^{5}\\sin^{4}x = - f(x)\\Rightarrow \\) Odd function."
      },
      {
        id: "m2-0a-oe3",
        type: "Odd and Even Functions",
        question: "Determine whether \\(f(x)\\) is an odd function, an even function or neither of them.\n\\(f(x) = x^{2}\\cos 2x\\)",
        answer: "Even function.",
        steps: "\\(f( - x) = x^{2}\\cos 2x = f(x)\\Rightarrow \\) Even function."
      },
      {
        id: "m2-0a-oe4",
        type: "Odd and Even Functions",
        question: "Determine whether \\(f(x)\\) is an odd function, an even function or neither of them.\n\\(f(x) = \\frac{\\cos x}{|x| + 1}\\)",
        answer: "Even function.",
        steps: "\\(f( - x) = f(x)\\Rightarrow \\) Even function."
      },
      {
        id: "m2-0a-oe5",
        type: "Odd and Even Functions",
        question: "Determine whether \\(f(x)\\) is an odd function, an even function or neither of them.\n\\(f(x) = 3\\)",
        answer: "Even function.",
        steps: "\\(f( - x) = 3 = f(x)\\Rightarrow \\) Even function."
      },
      {
        id: "m2-0a-oe6",
        type: "Odd and Even Functions",
        question: "[2324-WYK-S4-M2-UT1-Q2] Let \\(g(x) = \\sum_{k = 1}^{n}\\frac{x^{2k + 1}}{k}\\). (a) Determine if \\(g(x)\\) is odd, even or neither. (b) If \\(h(x) = \\cos(3x)\\), John claims that \\(h(g(x))\\) is an even function. Do you agree? Explain your answer.",
        answer: "(a) \\(g(x)\\) is an odd function.\n(b) Yes, I agree: \\(h(g(x))\\) is an even function.",
        steps: "(a) \\(g( - x) = \\sum_{k = 1}^{n}\\frac{( - x)^{2k + 1}}{k} = - g(x)\\Rightarrow g(x)\\) is an odd function. (b) \\(h(g( - x)) = h( - g(x)) = \\cos( - 3g(x)) = h(g(x))\\Rightarrow \\) Yes, I agree."
      },
      {
        id: "m2-0a-oe7",
        type: "Odd and Even Functions",
        question: "[2026-DSE-M2-Q5a] Let \\(a > 1\\). Define \\(g(x) = \\frac{x^{2}(a^{x} - a^{2x})}{1 + a^{3x}}\\) for all \\(x \\in \\mathbf{R}\\). Is \\(g(x)\\) an odd function? Explain your answer.",
        answer: "Yes, \\(g(x)\\) is an odd function.",
        steps: "\\(g( - x) = \\frac{x^{2}(a^{- x} - a^{- 2x})}{1 + a^{- 3x}} = \\frac{x^{2}(a^{2x} - a^{x})}{a^{3x} + 1} = - g(x)\\Rightarrow \\) Yes, it is an odd function."
      },
      {
        id: "m2-0a-oe8",
        type: "Odd and Even Functions",
        question: "Given that \\(f(x) = \\frac{x}{2^{x} - 1} + \\frac{x}{2}\\) for \\(x \\neq 0\\) and \\(g(x) = (x + \\sqrt{\\lambda^{2} + x^{2}}) - \\frac{1}{x + \\sqrt{\\lambda^{2} + x^{2}}}\\). (a) Show that \\(f(x)\\) is an even function. (b) If \\(g(x)\\) is an odd function, find the value(s) of \\(\\lambda\\).",
        answer: "(a) \\(f(x)\\) is an even function.\n(b) \\(\\lambda = \\pm 1\\)",
        steps: "(a) \\(f( - x) = \\frac{- x}{2^{- x} - 1} - \\frac{x}{2} = \\frac{- 2x \\cdot 2^{x} - x + x \\cdot 2^{x}}{2(1 - 2^{x})} = \\frac{x + x \\cdot 2^{x}}{2(2^{x} - 1)} = f(x)\\Rightarrow \\) Even function. (b) \\(g( - x) = - g(x)\\Rightarrow 2\\sqrt{\\lambda^{2} + x^{2}} = \\frac{2\\sqrt{\\lambda^{2} + x^{2}}}{\\lambda^{2}}\\Rightarrow \\lambda = \\pm 1\\)."
      }
    ],

    // ---- M2 Chapter 1: Mathematical Induction ----
    mathematical_induction: [
      {
        id: "m2-1a-ex1",
        question: "[Level 1] Prove, by mathematical induction, that for all positive integers \\(n\\), \\(\\frac{1}{\\pi(\\pi + 1)} + \\frac{1}{(\\pi + 1)(\\pi + 2)} + \\ldots + \\frac{1}{(\\pi + n - 1)(\\pi + n)} = \\frac{n}{\\pi(\\pi + n)}\\).",
        answer: "Proved by mathematical induction.",
        steps: "For \\(n = 1\\): L.H.S. \\(= \\frac{1}{\\pi(\\pi + 1)} =\\) R.H.S. Assume true for \\(n = m\\). For \\(n = m + 1\\): \\(\\frac{m}{\\pi(\\pi + m)} + \\frac{1}{(\\pi + m)(\\pi + m + 1)} = \\frac{(m + 1)(\\pi + m)}{\\pi(\\pi + m)(\\pi + m + 1)} = \\frac{m + 1}{\\pi(\\pi + (m + 1))}\\). True by M.I."
      },
      {
        id: "m2-1a-ex2",
        question: "[Level 1] Prove, by mathematical induction, that for all positive integers \\(n\\), \\(\\sum_{r = 1}^{n}{( - 1)^{r + 1}2^{r}} = \\frac{2 + ( - 2)^{n + 1}}{3}\\).",
        answer: "Proved by mathematical induction.",
        steps: "For \\(n = 1\\): L.H.S. \\(= 2 =\\) R.H.S. Assume true for \\(n = m\\). For \\(n = m + 1\\): \\(\\frac{2 + ( - 2)^{m + 1}}{3} + ( - 1)^{m + 2}2^{m + 1} = \\frac{2 - 2( - 2)^{m + 1}}{3} = \\frac{2 + ( - 2)^{(m + 1) + 1}}{3}\\). True by M.I."
      },
      {
        id: "m2-1a-ex3",
        question: "[Level 1] Prove, by mathematical induction, that for all positive integers \\(n\\), \\(\\sum_{r = 1}^{n}\\left( 3^{r - 1} + \\frac{1}{3^{r - 1}} \\right) = \\frac{3^{n}}{2} - \\frac{1}{2 \\times 3^{n - 1}} + 1\\).",
        answer: "Proved by mathematical induction.",
        steps: "For \\(n = 1\\): L.H.S. \\(= 2 =\\) R.H.S. Assume true for \\(n = m\\). For \\(n = m + 1\\): \\(\\frac{3^{m}}{2} - \\frac{1}{2 \\times 3^{m - 1}} + 1 + 3^{m} + \\frac{1}{3^{m}} = \\frac{3^{m + 1}}{2} - \\frac{1}{2 \\times 3^{(m + 1) - 1}} + 1\\). True by M.I."
      },
      {
        id: "m2-1a-ex4",
        question: "[Level 2] Prove, by mathematical induction, that for all positive integers \\(n\\), \\(x^{2} + 2x^{4} + 3x^{6} + \\ldots + nx^{2n} = \\frac{x^{2} - (n + 1)x^{2n + 2} + nx^{2n + 4}}{(1 - x)^{2}(1 + x)^{2}}\\), where \\(x \\neq - 1\\) and \\(x \\neq 1\\).",
        answer: "Proved by mathematical induction.",
        steps: "For \\(n = 1\\): L.H.S. \\(= x^{2} =\\) R.H.S. Assume true for \\(n = m\\). For \\(n = m + 1\\): \\(\\frac{x^{2} - (m + 1)x^{2m + 2} + mx^{2m + 4}}{(1 - x^{2})^{2}} + (m + 1)x^{2m + 2} = \\frac{x^{2} - ((m + 1) + 1)x^{2(m + 1) + 2} + (m + 1)x^{2(m + 1) + 4}}{(1 - x)^{2}(1 + x)^{2}}\\). True by M.I."
      },
      {
        id: "m2-1a-ex5",
        question: "[Level 2 \u2013 Taking out common factor] (a) Prove by M.I. that \\(\\frac{7}{1 \\times 2 \\times 3} + \\frac{10}{2 \\times 3 \\times 4} + \\ldots + \\frac{3n + 4}{n(n + 1)(n + 2)} = \\frac{5}{2} - \\frac{3n + 5}{(n + 1)(n + 2)}\\). (b) Hence, find \\(\\frac{7}{2} + \\frac{10}{8} + \\frac{13}{20} + \\ldots + \\frac{52}{1632}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{356}{51}\\)",
        steps: "(a) For \\(n = 1\\): L.H.S. \\(= \\frac{7}{6} =\\) R.H.S. Inductive step: \\(\\frac{5}{2} - \\frac{3m + 5}{(m + 1)(m + 2)} + \\frac{3m + 7}{(m + 1)(m + 2)(m + 3)} = \\frac{5}{2} - \\frac{3(m + 1) + 5}{(m + 2)(m + 3)}\\). (b) \\(= 3\\left\\lbrack \\frac{5}{2} - \\frac{3(16) + 5}{17 \\times 18} \\right\\rbrack = \\frac{356}{51}\\)."
      },
      {
        id: "m2-1a-ex6",
        question: "[Level 2 \u2013 Taking out common factor] (a) Prove by M.I. that \\(\\sum_{r = 1}^{n}\\frac{1}{r(r + 1)(r + 2)(r + 3)} = \\frac{1}{3}\\left\\lbrack \\frac{1}{6} - \\frac{1}{(n + 1)(n + 2)(n + 3)} \\right\\rbrack\\). (b) Hence, find (i) \\(\\frac{1}{6 \\times 10 \\times 11 \\times 13} + \\ldots + \\frac{1}{12 \\times 22 \\times 23 \\times 25}\\) and (ii) \\(\\frac{1}{17 \\times 25 \\times 26 \\times 53} + \\ldots + \\frac{1}{11 \\times 34 \\times 65 \\times 67}\\).",
        answer: "(a) Proved by mathematical induction.\n(b)(i) \\(\\frac{26}{56925}\\)\n(b)(ii) \\(\\frac{206}{12215775}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{1}{24}\\). Inductive step adds \\(\\frac{1}{(m + 1)(m + 2)(m + 3)(m + 4)}\\) to get \\(\\frac{1}{3}\\left\\lbrack \\frac{1}{6} - \\frac{1}{(m + 2)(m + 3)(m + 4)} \\right\\rbrack\\). (b) (i) \\(= 2\\sum_{k = 10}^{22}\\frac{1}{k(k + 1)(k + 2)(k + 3)} = \\frac{26}{56925}\\). (ii) \\(= 12\\sum_{k = 50}^{65}\\frac{1}{k(k + 1)(k + 2)(k + 3)} = \\frac{206}{12215775}\\)."
      },
      {
        id: "m2-1a-ex7",
        question: "[Level 2 \u2013 Taking out common factor] (a) Let \\(q \\neq 1\\). Prove by M.I. that \\(1 + 2q + 3q^{2} + \\ldots + nq^{n - 1} = \\frac{1 - (n + 1)q^{n} + nq^{n + 1}}{(1 - q)^{2}}\\). (b) Hence, find (i) \\(1 + 4 + 12 + 32 + \\ldots + 10(2)^{9}\\), (ii) \\(8 + 24 + 64 + \\ldots + 10(2)^{10}\\), (iii) \\(\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} + \\ldots + \\frac{9}{2 \\times 3^{8}}\\).",
        answer: "(a) Proved by mathematical induction.\n(b)(i) \\(9217\\)\n(b)(ii) \\(18432\\)\n(b)(iii) \\(\\frac{4919}{4374}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(1\\). Inductive step simplifies to \\(\\frac{1 - (m + 2)q^{m + 1} + (m + 1)q^{m + 2}}{(1 - q)^{2}}\\). (b) (i) \\(q = 2,n = 10\\Rightarrow 9217\\). (ii) \\(2(9217 - 1) = 18432\\). (iii) \\(\\frac{1}{2}\\left\\lbrack \\frac{1 - 10(1/3)^{9} + 9(1/3)^{10}}{(2/3)^{2}} \\right\\rbrack = \\frac{4919}{4374}\\)."
      },
      {
        id: "m2-1a-ex8",
        question: "[Level 3] (a) Prove by M.I. that \\(\\prod_{r = 1}^{n}\\left( 1 + \\frac{1}{r + 1} \\right) = \\frac{n}{2} + 1\\). (b) Hence find \\(\\left( 1 + \\frac{1}{11} \\right)\\left( 1 + \\frac{1}{12} \\right)\\ldots\\left( 1 + \\frac{1}{40} \\right)\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{41}{11}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{3}{2}\\). Inductive step: \\(\\left( \\frac{m}{2} + 1 \\right)\\left( 1 + \\frac{1}{m + 2} \\right) = \\frac{m + 3}{2} = \\frac{m + 1}{2} + 1\\). (b) \\(= \\frac{\\frac{39}{2} + 1}{\\frac{9}{2} + 1} = \\frac{41}{11}\\)."
      },
      {
        id: "m2-1a-ex9",
        question: "[Level 3 \u2013 Sum of odd/even sequences] (a) Prove by M.I. that \\(1^{3} + 2^{3} + \\ldots + n^{3} = \\frac{n^{2}(n + 1)^{2}}{4}\\). (b) Hence, find (i) \\(2^{3} + 4^{3} + \\ldots + 26^{3}\\), (ii) \\(1^{3} + 3^{3} + \\ldots + 27^{3}\\), (iii) \\(11^{3} + 13^{3} + \\ldots + 31^{3}\\).",
        answer: "(a) Proved by mathematical induction.\n(b)(i) \\(66248\\)\n(b)(ii) \\(76636\\)\n(b)(iii) \\(129591\\)",
        steps: "(a) Standard sum of cubes induction. (b) (i) \\(8\\left\\lbrack \\frac{13^{2}(14)^{2}}{4} \\right\\rbrack = 66248\\). (ii) \\(\\frac{27^{2}(28)^{2}}{4} - 66248 = 76636\\). (iii) \\(129591\\)."
      },
      {
        id: "m2-1a-ex10",
        question: "[Level 3 \u2013 Summation Property] [2024-DSE-M2-Q8] (a) Prove by M.I. that \\(\\sum_{r = 1}^{n}{r(2^{- r})} = 2 - (n + 2)(2^{- n})\\). (b) Evaluate (i) \\(\\sum_{r = 1000}^{1999}{r(2^{- r})}\\) and (ii) \\(\\sum_{r = 1}^{1000}{(2000 - r)2^{r}}\\).",
        answer: "(a) Proved by mathematical induction.\n(b)(i) \\(1001(2^{- 999}) - 2001(2^{- 1999})\\)\n(b)(ii) \\(1001(2^{1001}) - 4002\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{1}{2}\\). Inductive step: \\(2 - (m + 2)2^{- m} + (m + 1)2^{- (m + 1)} = 2 - (m + 3)2^{- (m + 1)}\\). (b) (i) \\(1001(2^{- 999}) - 2001(2^{- 1999})\\). (ii) Let \\(j = 2000 - r\\): \\(2^{2000}\\sum_{j = 1000}^{1999}{j(2^{- j})} = 1001(2^{1001}) - 4002\\)."
      },
      {
        id: "m2-1a-ex11",
        question: "[Level 1] Prove by M.I. that for \\(n = 2,3,4\\ldots\\), \\(\\frac{1}{2 \\times 1} + \\frac{1}{3 \\times 2} + \\ldots + \\frac{1}{n(n - 1)} = \\frac{n - 1}{n}\\).",
        answer: "Proved by mathematical induction.",
        steps: "Base case \\(n = 2\\): \\(\\frac{1}{2}\\). Inductive step: \\(\\frac{m - 1}{m} + \\frac{1}{(m + 1)m} = \\frac{m^{2}}{m(m + 1)} = \\frac{(m + 1) - 1}{m + 1}\\). True by M.I."
      },
      {
        id: "m2-1a-ex12",
        question: "[Level 2] Prove by M.I. that for \\(n = 2,3,4\\ldots\\), \\(\\left( 1 - \\frac{1}{2^{2}} \\right)\\left( 1 - \\frac{1}{3^{2}} \\right)\\ldots\\left( 1 - \\frac{1}{n^{2}} \\right) = \\frac{n + 1}{2n}\\).",
        answer: "Proved by mathematical induction.",
        steps: "Base case \\(n = 2\\): \\(\\frac{3}{4}\\). Inductive step: \\(\\frac{m + 1}{2m}\\left( 1 - \\frac{1}{(m + 1)^{2}} \\right) = \\frac{m + 2}{2(m + 1)}\\). True by M.I."
      },
      {
        id: "m2-1a-ex13",
        question: "[Level 2 \u2013 Taking out common factor] [2425-WYK-S4-UT1-M2-Q5] (a) Prove by M.I. that \\(\\frac{1}{1 \\times 3} + \\frac{1}{2 \\times 3^{2}} + \\ldots + \\frac{1}{2^{n - 1} \\times 3^{n}} = \\frac{2}{5}\\left( 1 - \\frac{1}{6^{n}} \\right)\\). (b) Hence, find \\(\\frac{1}{6} + \\frac{1}{6^{2}} + \\ldots + \\frac{1}{6^{12}}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{435356467}{2176782336}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{1}{3}\\). Inductive step: \\(\\frac{2}{5}\\left( 1 - \\frac{1}{6^{k}} \\right) + \\frac{1}{2^{k} \\times 3^{k + 1}} = \\frac{2}{5}\\left( 1 - \\frac{1}{6^{k + 1}} \\right)\\). (b) \\(= \\frac{1}{2}\\left\\lbrack \\frac{2}{5}\\left( 1 - \\frac{1}{6^{12}} \\right) \\right\\rbrack = \\frac{435356467}{2176782336}\\)."
      },
      {
        id: "m2-1a-ex14",
        question: "[Level 2 \u2013 Double Negation] (a) Prove by M.I. that \\(1 - 4 + 4^{2} - \\ldots + ( - 4)^{n} = \\frac{1 - ( - 4)^{n + 1}}{5}\\). (b) Hence, find (i) \\(4^{3} - 4^{4} + 4^{5} - \\ldots + 4^{11}\\) and (ii) \\(4^{13} - 4^{14} + 4^{15} - \\ldots + 4^{25}\\).",
        answer: "(a) Proved by mathematical induction.\n(b)(i) \\(3355456\\)\n(b)(ii) \\(\\frac{4^{26} + 4^{13}}{5}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(- 3\\). Inductive step: \\(\\frac{1 - ( - 4)^{m + 1}}{5} + ( - 4)^{m + 1} = \\frac{1 - ( - 4)^{m + 2}}{5}\\). (b) (i) \\(3355456\\). (ii) \\(\\frac{4^{26} + 4^{13}}{5}\\)."
      },
      {
        id: "m2-1a-ex15",
        question: "[Level 2 \u2013 Double Negation] [2425-WYK-S5-Midyear-M2-Q4] (a) Prove by M.I. that \\(1 - \\frac{1}{5 \\times 8} - \\frac{1}{8 \\times 11} - \\ldots - \\frac{1}{(3n + 2)(3n + 5)} = \\frac{14n + 25}{5(3n + 5)}\\). (b) Hence, find \\(\\frac{1}{95 \\times 98} + \\frac{1}{98 \\times 101} + \\ldots + \\frac{1}{152 \\times 155}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{4}{2945}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{39}{40}\\). Inductive step simplifies to \\(\\frac{14(m + 1) + 25}{5(3(m + 1) + 5)}\\). (b) \\(= - \\left\\lbrack \\frac{14(50) + 25}{5(155)} - \\frac{14(30) + 25}{5(95)} \\right\\rbrack = \\frac{4}{2945}\\)."
      },
      {
        id: "m2-1a-ex16",
        question: "[Level 2] (a) Using M.I., prove that \\(\\sum_{r = n}^{2n}{r(r + 1)} = \\frac{1}{3}n(n + 1)(7n + 5)\\). (b) Using (a), evaluate \\(\\sum_{r = 10}^{40}{r(r + 1)}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(22630\\)",
        steps: "(a) Base case \\(n = 1\\): \\(8\\). Inductive step: \\(\\frac{1}{3}m(m + 1)(7m + 5) - m(m + 1) + (2m + 1)(2m + 2) + (2m + 2)(2m + 3) = \\frac{1}{3}(m + 1)(m + 2)(7m + 12)\\). (b) \\(= \\sum_{r = 10}^{20}{r(r + 1) + \\sum_{r = 20}^{40}{r(r + 1) - 20(21)}} = 22630\\)."
      },
      {
        id: "m2-1a-ex17",
        question: "[Level 2] (a) Using M.I., prove that \\(\\sum_{r = n}^{2n}\\frac{1}{(r + 1)(r + 2)} = \\frac{1}{2n + 2}\\). (b) Using (a), evaluate \\(\\sum_{r = 3}^{12}\\frac{1}{(r + 1)(r + 2)}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{5}{28}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{1}{4}\\). Inductive step telescopes to \\(\\frac{1}{2m + 4} = \\frac{1}{2(m + 1) + 2}\\). (b) \\(= \\frac{1}{8} + \\frac{1}{14} - \\frac{1}{56} = \\frac{5}{28}\\)."
      },
      {
        id: "m2-1a-ex18",
        question: "[Level 2] [2425-WYK-S4-UT1-M2-Q6] (a) Prove by M.I. that \\(\\sum_{k = 1}^{n}\\left( \\frac{1}{2k - 1} - \\frac{1}{2k} \\right) = \\sum_{r = n + 1}^{2n}\\frac{1}{r}\\). (b) Patrick claims that \\(\\frac{1}{2024} + \\frac{1}{2025} + \\ldots + \\frac{1}{4046} > \\frac{1}{2}\\). Do you agree?",
        answer: "(a) Proved by mathematical induction.\n(b) Agree: the sum is greater than \\(\\frac{1}{2}\\).",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{1}{2}\\). Inductive step simplifies to \\(\\sum_{r = m + 2}^{2m + 2}\\frac{1}{r}\\). (b) \\(= \\sum_{k = 1}^{2023}\\left( \\frac{1}{2k - 1} - \\frac{1}{2k} \\right) = \\frac{1}{1 \\times 2} + \\frac{1}{3 \\times 4} + \\ldots + \\frac{1}{4045 \\times 4046} > \\frac{1}{2}\\). Agreed."
      },
      {
        id: "m2-1a-ex19",
        question: "[Level 3 \u2013 Partial Fraction] [2526-WYK-S6-FTA-M2-Q7] (a) Prove by M.I. that \\(\\sum_{k = 2n}^{3n}\\frac{1}{(k + 2)(k + 3)} = \\frac{1}{6(n + 1)}\\). (b) Using (a), evaluate \\(\\sum_{k = 40}^{90}\\frac{k(k + 5)}{(k + 2)(k + 3)}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{11050}{217}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(\\frac{1}{12}\\). Inductive step simplifies via partial fractions to \\(\\frac{1}{6(m + 2)}\\). (b) \\(= 51 - 6\\left\\lbrack \\frac{1}{6(21)} + \\frac{1}{6(31)} - \\frac{1}{62 \\times 63} \\right\\rbrack = \\frac{11050}{217}\\)."
      },
      {
        id: "m2-1a-ex20",
        question: "[Level 2] (a) Prove by M.I. that \\(1 \\times 3 + 2 \\times 4 + \\ldots + n(n + 2) = \\frac{n(n + 1)(2n + 7)}{6}\\). (b) Using (a) and \\(\\sum_{r = 1}^{n}r = \\frac{n(n + 1)}{2}\\), prove \\(1 \\times 4 + 2 \\times 5 + \\ldots + (n - 1)(n + 2) = \\frac{n(n - 1)(n + 4)}{3}\\) for \\(n \\geq 2\\).",
        answer: "(a) Proved by mathematical induction.\n(b) Proved.",
        steps: "(a) Base case \\(n = 1\\): \\(3\\). Inductive step factors to \\(\\frac{(m + 1)(m + 2)(2m + 9)}{6}\\). (b) \\(\\sum_{m = 1}^{n}{(m - 1)(m + 2)} = \\frac{n(n + 1)(2n + 7)}{6} - \\frac{n(n + 5)}{2} = \\frac{n(n - 1)(n + 4)}{3}\\)."
      },
      {
        id: "m2-1a-ex21",
        question: "[Level 2] [2324-WYK-S4-UT1-M2-Q3] (a) Prove by M.I. that \\(1 \\times 2 + 3 \\times 4 + \\ldots + (2n - 1)(2n) = \\frac{1}{3}n(n + 1)(4n - 1)\\). (b) Find an expression for \\(\\sum_{k = 1}^{n}k^{2}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\sum_{k = 1}^{n}k^{2} = \\frac{1}{6}n(n + 1)(2n + 1)\\)",
        steps: "(a) Base case \\(n = 1\\): \\(2\\). Inductive step factors to \\(\\frac{1}{3}(k + 1)(k + 2)(4k + 3)\\). (b) \\(4\\sum_{k = 1}^{n}{k^{2} - 2\\sum_{k = 1}^{n}k} = \\frac{1}{3}n(n + 1)(4n - 1)\\Rightarrow \\sum_{k = 1}^{n}k^{2} = \\frac{1}{6}n(n + 1)(2n + 1)\\)."
      },
      {
        id: "m2-1a-ex22",
        question: "[Level 2] (a) Prove by M.I. that \\(7 + 2 \\times 7^{2} + 3 \\times 7^{3} + \\ldots + n \\times 7^{n} = \\frac{(6n - 1)(7^{n + 1}) + 7}{36}\\). (b) Find an expression for \\(2 \\times 7 + 3 \\times 7^{2} + \\ldots + (n + 1) \\times 7^{n}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(\\frac{(6n + 5)(7^{n + 1}) - 35}{36}\\)",
        steps: "(a) Base case \\(n = 1\\): \\(7\\). Inductive step simplifies to \\(\\frac{(6m + 5)(7^{m + 2}) + 7}{36}\\). (b) \\(\\sum_{k = 1}^{n}{(k + 1)7^{k}} = \\frac{(6n - 1)(7^{n + 1}) + 7}{36} + \\frac{7(1 - 7^{n})}{1 - 7} = \\frac{(6n + 5)(7^{n + 1}) - 35}{36}\\)."
      },
      {
        id: "m2-1a-ex23",
        question: "[Level 3 \u2013 MI not starting with first term + Odd/even Sequences] (a) Prove by M.I. that \\(1 \\times 3 + 2 \\times 4 + \\ldots + (n - 1)(n + 1) = \\frac{n(n - 1)(2n + 5)}{6}\\) for \\(n \\geq 2\\). (b) Show \\(1^{2} + 2^{2} + \\ldots + n^{2} = \\frac{n(n + 1)(2n + 1)}{6}\\). (c) Evaluate (i) \\(101 \\times 103 + \\ldots + 199 \\times 201\\), (ii) \\(102^{2} + 104^{2} + \\ldots + 200^{2}\\), (iii) \\(101 \\times 103 + 103 \\times 105 + \\ldots + 199 \\times 201\\).",
        answer: "(a) Proved by mathematical induction.\n(b) Shown.\n(c)(i) \\(2338050\\)\n(c)(ii) \\(1181700\\)\n(c)(iii) \\(1181650\\)",
        steps: "(a) Base case \\(n = 2\\): \\(3\\). Inductive step factors to \\(\\frac{(m + 1)m(2m + 7)}{6}\\). (b) \\(\\sum_{r = 2}^{n}{(r^{2} - 1)} = \\frac{n(n - 1)(2n + 5)}{6}\\Rightarrow \\sum_{r = 1}^{n}r^{2} = \\frac{n(n + 1)(2n + 1)}{6}\\). (c) (i) \\(2338050\\). (ii) \\(1181700\\). (iii) \\(1181700 - 50 = 1181650\\)."
      },
      {
        id: "m2-1a-ex24",
        question: "[Level 1] \\(c_{1} = 2\\) and \\(c_{k + 1} = 3c_{k} + 2k - 1\\). Prove by M.I. that \\(c_{n} = 3^{n} - n\\).",
        answer: "Proved by mathematical induction.",
        steps: "Base case \\(n = 1\\): \\(c_{1} = 2 = 3^{1} - 1\\). Inductive step: \\(c_{m + 1} = 3(3^{m} - m) + 2m - 1 = 3^{m + 1} - (m + 1)\\). True by M.I."
      },
      {
        id: "m2-1a-ex25",
        question: "[Level 1] \\(a_{1} = \\frac{5}{2}\\) and \\(a_{r + 1} = \\frac{3}{2}(a_{r} - 1) + 1\\). Prove by M.I. that \\(a_{n} = \\frac{3^{n} + 2^{n}}{2^{n}}\\).",
        answer: "Proved by mathematical induction.",
        steps: "Base case \\(n = 1\\): \\(\\frac{5}{2}\\). Inductive step: \\(a_{m + 1} = \\frac{3}{2}\\left( \\frac{3^{m}}{2^{m}} \\right) + 1 = \\frac{3^{m + 1} + 2^{m + 1}}{2^{m + 1}}\\). True by M.I."
      },
      {
        id: "m2-1a-ex26",
        question: "[Level 1] \\(a_{1} = p\\) and \\(a_{k + 1} = 2a_{k} - a_{k}^{2}\\) (\\(p \\neq 0\\)). Prove by M.I. that \\(a_{n} = 1 - (1 - p)^{2^{n - 1}}\\).",
        answer: "Proved by mathematical induction.",
        steps: "Base case \\(n = 1\\): \\(p\\). Inductive step: \\(a_{m + 1} = 2\\lbrack 1 - (1 - p)^{2^{m - 1}}\\rbrack - \\lbrack 1 - (1 - p)^{2^{m - 1}}\\rbrack^{2} = 1 - (1 - p)^{2^{m}}\\). True by M.I."
      },
      {
        id: "m2-1a-ex27",
        question: "[Level 2] \\(a_{1} = 1,a_{2} = 2\\) and \\(a_{r + 2} = a_{r + 1} + a_{r}\\). Prove by M.I. that \\((a_{n + 1})^{2} - a_{n + 2}a_{n} = ( - 1)^{n + 1}\\).",
        answer: "Proved by mathematical induction.",
        steps: "Base case \\(n = 1\\): \\(2^{2} - 3(1) = 1 = ( - 1)^{2}\\). Inductive step: \\((a_{m + 2})^{2} - (a_{m + 2} + a_{m + 1})a_{m + 1} = a_{m + 2}a_{m} - (a_{m + 1})^{2} = - ( - 1)^{m + 1} = ( - 1)^{m + 2}\\). True by M.I."
      },
      {
        id: "m2-1a-ex28",
        question: "[Level 2] \\(a_{1} = 6\\) and \\(a_{n + 1} = \\frac{a_{n}}{a_{n} - 2}\\). (a) Evaluate \\(a_{2}\\) and \\(a_{3}\\). (b) Prove by M.I. that \\(a_{n} = \\frac{3}{1 + ( - 2)^{n - 2}}\\). (c) Prove by M.I. that \\(\\sum_{i = 1}^{n}\\frac{1}{a_{i}} = \\frac{6n - 1 + ( - 2)^{n}}{18}\\).",
        answer: "(a) \\(a_{2} = \\frac{3}{2},a_{3} = - 3\\)\n(b) Proved by mathematical induction.\n(c) Proved by mathematical induction.",
        steps: "(a) \\(a_{2} = \\frac{3}{2},a_{3} = - 3\\). (b) Base case \\(n = 1\\): \\(6\\). Inductive step simplifies to \\(\\frac{3}{1 + ( - 2)^{m - 1}}\\). (c) Base case \\(n = 1\\): \\(\\frac{1}{6}\\). Inductive step: \\(\\frac{6m - 1 + ( - 2)^{m}}{18} + \\frac{1 + ( - 2)^{m - 1}}{3} = \\frac{6(m + 1) - 1 + ( - 2)^{m + 1}}{18}\\). True by M.I."
      }
    ],

    // ---- M2 Chapter 2: Binomial Theorem ----
    binomial_theorem: [
      {
        id: "m2-2a-ex1",
        question: "[Level 1] Find the value of \\(n\\) in the equation \\(C_{2}^{n + 4} + C_{2}^{n + 1} = 9C_{2}^{n}\\).",
        answer: "\\(n = 3\\)",
        steps: "\\((n + 4)(n + 3) + n(n + 1) = 9n(n - 1)\\Rightarrow 7n^{2} - 17n - 12 = 0\\Rightarrow n = 3\\) or \\(- \\frac{4}{7}\\) (rej.)"
      },
      {
        id: "m2-2a-ex2",
        question: "[Level 2] Simplify (a) \\(\\frac{C_{r - 1}^{n}}{C_{n - r}^{n}}\\), (b) \\(\\frac{C_{r}^{n + 1}}{C_{r - 1}^{n}} \\times \\frac{C_{n - r}^{n - 1}}{C_{n - r + 1}^{n + 1}}\\), (c) \\(\\frac{1}{C_{r}^{10}} + \\frac{1}{C_{r + 1}^{10}}\\).",
        answer: "(a) \\(\\frac{r}{n - r + 1}\\)\n(b) \\(\\frac{n - r + 1}{n}\\)\n(c) \\(\\frac{11}{10C_{r}^{9}}\\)",
        steps: "(a) \\(= \\frac{r}{n - r + 1}\\). (b) \\(= \\frac{n + 1}{r} \\times \\frac{r(n - r + 1)}{n(n + 1)} = \\frac{n - r + 1}{n}\\). (c) \\(= \\frac{r!(9 - r)!}{10!}\\lbrack(10 - r) + (r + 1)\\rbrack = \\frac{11}{10C_{r}^{9}}\\)."
      },
      {
        id: "m2-2a-ex3",
        question: "[Level 1] Expand (a) \\(\\left( x + \\frac{2}{x} \\right)^{3}\\left( x - \\frac{2}{x} \\right)^{3}\\) and (b) \\(\\left( x^{2} - 6 + \\frac{9}{x^{2}} \\right)^{3}\\).",
        answer: "(a) \\(x^{6} - 12x^{2} + \\frac{48}{x^{2}} - \\frac{64}{x^{6}}\\)\n(b) \\(x^{6} - 18x^{4} + 135x^{2} - 540 + \\frac{1215}{x^{2}} - \\frac{1458}{x^{4}} + \\frac{729}{x^{6}}\\)",
        steps: "(a) \\(= \\left( x^{2} - \\frac{4}{x^{2}} \\right)^{3} = x^{6} - 12x^{2} + \\frac{48}{x^{2}} - \\frac{64}{x^{6}}\\). (b) \\(= \\left( x - \\frac{3}{x} \\right)^{6} = x^{6} - 18x^{4} + 135x^{2} - 540 + \\frac{1215}{x^{2}} - \\frac{1458}{x^{4}} + \\frac{729}{x^{6}}\\)."
      },
      {
        id: "m2-2a-ex4",
        question: "[Level 2] Evaluate (a) \\(\\left( 3^{\\frac{3}{2}} + \\frac{1}{\\sqrt{3}} \\right)^{6} + \\left( 3^{\\frac{3}{2}} - \\frac{1}{\\sqrt{3}} \\right)^{6}\\) and (b) \\(\\left( \\frac{1}{3 + \\sqrt{5}} \\right)^{6} - \\left( \\frac{1}{3 - \\sqrt{5}} \\right)^{6}\\).",
        answer: "(a) \\(\\frac{1262144}{27}\\)\n(b) \\(- \\frac{9\\sqrt{5}}{4}\\)",
        steps: "(a) Odd terms cancel \\(\\Rightarrow 2\\left\\lbrack 3^{9} + 15(3^{6})\\left( \\frac{1}{3} \\right) + 15(3^{3})\\left( \\frac{1}{9} \\right) + \\frac{1}{27} \\right\\rbrack\\) \\(= \\frac{1262144}{27}\\). (b) \\(= \\frac{(3 - \\sqrt{5})^{6} - (3 + \\sqrt{5})^{6}}{4096} = - \\frac{9\\sqrt{5}}{4}\\)."
      },
      {
        id: "m2-2a-ex5",
        question: "[Level 1] In the expansion of \\(\\left( x + \\frac{2}{x^{3}} \\right)^{8}\\), find (a) the constant term, (b) the \\(x^{3}\\) term.",
        answer: "(a) \\(112\\)\n(b) The \\(x^{3}\\) term does not exist.",
        steps: "General term \\(= C_{r}^{8}2^{r}x^{8 - 4r}\\). (a) \\(r = 2\\Rightarrow C_{2}^{8}(2)^{2} = 112\\). (b) \\(8 - 4r = 3\\Rightarrow r = \\frac{5}{4}\\) (not integer), so the \\(x^{3}\\) term does not exist."
      },
      {
        id: "m2-2a-ex6",
        question: "[Level 1] In the expansion of \\(\\left( x - \\frac{2}{x^{2}} \\right)^{9}\\) in ascending powers of \\(x\\), find (a) the \\(5^{th}\\) term, (b) the coefficient of the \\(x^{4}\\) term.",
        answer: "(a) \\(- 4032x^{- 6}\\)\n(b) \\(0\\) (there is no \\(x^{4}\\) term)",
        steps: "General term \\(= C_{r}^{9}( - 2)^{9 - r}x^{3r - 18}\\). (a) \\(r = 4\\Rightarrow C_{4}^{9}( - 2)^{5}x^{- 6} = - 4032x^{- 6}\\). (b) \\(3r - 18 = 4\\Rightarrow r = \\frac{22}{3}\\) (not integer), so coefficient \\(= 0\\)."
      },
      {
        id: "m2-2a-ex7",
        question: "[Level 1] \\((1 - px)^{n} = 1 - 36x + 36p^{2}x^{2} + \\ldots\\) (a) Find \\(n\\) and \\(p\\). (b) Find the coefficient of \\(x^{3}\\).",
        answer: "(a) \\(n = 9,p = 4\\)\n(b) \\(- 5376\\)",
        steps: "(a) \\(np = 36,\\frac{n(n - 1)}{2} = 36\\Rightarrow n = 9,p = 4\\). (b) Coefficient of \\(x^{3} = C_{3}^{9}( - 4)^{3} = - 5376\\)."
      },
      {
        id: "m2-2a-ex8",
        question: "[Level 1] \\((1 + bx)^{n} = 1 + 63x + 1701x^{2} + \\ldots\\) Find \\(b\\) and \\(n\\).",
        answer: "\\(n = 7,b = 9\\)",
        steps: "\\(nb = 63,\\frac{n(n - 1)}{2}b^{2} = 1701\\Rightarrow n =\\) \\(7\\)\\(,b =\\) \\(9\\)."
      },
      {
        id: "m2-2a-ex9",
        question: "[Level 1] In \\(\\left( 1 + \\frac{3}{x} \\right)^{n}(1 + x^{2})^{4}\\), the coefficient of \\(x^{6}\\) is \\(256\\). (a) Find \\(n\\). (b) Find the coefficient of \\(x^{- 5}\\).",
        answer: "(a) \\(n = 8\\)\n(b) \\(83592\\)",
        steps: "(a) \\(\\frac{9n(n - 1)}{2} + 4 = 256\\Rightarrow n = 8\\). (b) \\((C_{5}^{8})(3^{5}) + (C_{7}^{8})(3^{7})(4) = 83592\\)."
      },
      {
        id: "m2-2a-ex10",
        question: "[Level 1] [2324-WYK-S4-Midyear-M2-Q2] \\((1 - x)^{m}(1 + 2x)^{n} = 1 - 9x^{2} + \\ldots\\) Find \\(m\\) and \\(n\\).",
        answer: "\\(n = 3,m = 6\\)",
        steps: "\\(- m + 2n = 0\\) and \\(\\frac{m(m - 1)}{2} - 2mn + 2n(n - 1) = - 9\\Rightarrow n =\\) \\(3\\)\\(,m = 6\\)."
      },
      {
        id: "m2-2a-ex11",
        question: "[Level 1] \\((1 + ax)^{6} = \\sum_{r = 0}^{6}{\\alpha_{r}x^{r}}\\) and \\((x + 2b)^{9} = \\sum_{r = 0}^{9}{\\beta_{r}x^{r}}\\). If \\(\\alpha_{1} + \\beta_{8} = 0\\) and \\(\\alpha_{2} - \\beta_{7} + 36 = 0\\), find \\(b\\).",
        answer: "\\(b = \\pm 2\\)",
        steps: "\\(6a + 18b = 0\\Rightarrow a = - 3b\\); \\(15a^{2} - 144b^{2} + 36 = 0\\Rightarrow - 9b^{2} + 36 = 0\\Rightarrow b = \\pm 2\\)."
      },
      {
        id: "m2-2a-ex12",
        question: "[Level 1] (a) Expand \\((1 - 2x)^{m} + (1 - 7x)^{n}\\) up to \\(x^{2}\\). (b) If coefficients of \\(x\\) and \\(x^{2}\\) are \\(- 22\\) and \\(73\\), find \\(m\\) and \\(n\\).",
        answer: "(a) \\(2 - (2m + 7n)x + \\left\\lbrack 2m(m - 1) + \\frac{49n(n - 1)}{2} \\right\\rbrack x^{2} + \\ldots\\)\n(b) \\(n = 2,m = 4\\)",
        steps: "(a) \\(2 - (2m + 7n)x + \\left\\lbrack 2m(m - 1) + \\frac{49n(n - 1)}{2} \\right\\rbrack x^{2} + \\ldots\\) (b) \\(n = 2,m = 4\\)."
      },
      {
        id: "m2-2a-ex13",
        question: "[Level 1] \\((a + 5x)(1 + 4x)^{n} = 11 + 313x + bx^{2} + \\ldots\\) Find \\(a,b\\) and \\(n\\).",
        answer: "\\(a = 11\\), \\(n = 7\\), \\(b = 3836\\)",
        steps: "\\(a = 11\\), \\(4(11)n + 5 = 313\\Rightarrow n = 7\\), \\(b = 8(11)(7)(6) + 20(7) = 3836\\)."
      },
      {
        id: "m2-2a-ex14",
        question: "[Level 2] [2025-DSE-M2-Q1] \\((1 + mx)(1 + 5x)^{n} = \\sum_{k = 0}^{n + 1}{a_{k}x^{k}}\\). If \\(a_{1} = 27\\) and \\(a_{2} = 285\\), find \\(m\\) and \\(n\\).",
        answer: "\\(n = 6,m = - 3\\)",
        steps: "\\(5n + m = 27\\) and \\(\\frac{25n(n - 1)}{2} + 5mn = 285\\Rightarrow n = 6,m = - 3\\)."
      },
      {
        id: "m2-2a-ex15",
        question: "[Level 2] [2526-WYK-S4-Midyear-M2-Q7] \\(m,n > 1\\), coefficient of \\(x\\) in \\((1 + 2x)^{m} + (1 + 3x)^{n}\\) is \\(13\\). Find coefficient of \\(x^{2}\\).",
        answer: "\\(31\\)",
        steps: "\\(2m + 3n = 13\\Rightarrow m = 2,n = 3\\Rightarrow \\) Coefficient of \\(x^{2} = 2(2)(1) + \\frac{9(3)(2)}{2} = 31\\)."
      },
      {
        id: "m2-2a-ex16",
        question: "[Level 2] [2425-WYK-S5-Final-M2-Q1] In \\((2 - 3x)^{n}\\), coefficient of \\(x^{2}\\) is \\(81\\) times the constant term. Find (a) \\(n\\), (b) coefficient of \\(x^{- 1}\\) in \\((2 - 3x)^{n}\\left( 1 + \\frac{2}{x} \\right)^{3}\\).",
        answer: "(a) \\(n = 9\\)\n(b) \\(251904\\)",
        steps: "(a) \\(9(2^{n - 3})n(n - 1) = 81(2^{n})\\Rightarrow n = 9\\). (b) \\(512(6) + ( - 6912)(12) + (41472)(8) = 251904\\)."
      },
      {
        id: "m2-2a-ex17",
        question: "[Level 2] \\(\\left( x^{3} + \\frac{b}{x} \\right)^{12} = \\sum_{k = 0}^{12}{\\mu_{k}x^{4k - 12}}\\). (a) If \\(\\mu_{10} + \\mu_{11} = 240\\), find \\(b\\). (b) Find \\(\\mu_{4}\\).",
        answer: "(a) \\(b = 2\\)\n(b) \\(\\mu_{4} = 126720\\)",
        steps: "(a) \\(66b^{2} + 12b - 240 = 0\\Rightarrow b = 2\\). (b) \\(\\mu_{4} = C_{4}^{12}(2)^{8} = 126720\\)."
      },
      {
        id: "m2-2a-ex18",
        question: "[Level 2] [2526-WYK-S6-FTA-M2-Q1] \\(4(2 + px)(1 + 3x)^{n} = \\sum_{r = 0}^{n + 1}{a_{r}x^{r}}\\). If \\(a_{0} + a_{1} = 132\\) and \\(2a_{1} + a_{2} = 968\\), find \\(p\\) and \\(n\\).",
        answer: "\\(n = 6,p = - 5\\)",
        steps: "\\(a_{0} = 8,a_{1} = 24n + 4p,a_{2} = 36n^{2} - 36n + 12np\\Rightarrow p = 31 - 6n\\Rightarrow 36n^{2} - 336n + 720 = 0\\Rightarrow n = 6,p = - 5\\)."
      },
      {
        id: "m2-2a-ex19",
        question: "[Level 2] [1990-CE-AMath-Q1] \\((1 + 2x - 3x^{2})^{n} = 1 + ax + bx^{2} + \\ldots\\) (a) Express \\(a,b\\) in terms of \\(n\\). (b) If \\(b = 63\\), find \\(n\\).",
        answer: "(a) \\(a = 2n,b = 2n^{2} - 5n\\)\n(b) \\(n = 7\\)",
        steps: "(a) \\((1 + 3x)^{n}(1 - x)^{n}\\Rightarrow a = 2n,b = 2n^{2} - 5n\\). (b) \\(2n^{2} - 5n = 63\\Rightarrow n = 7\\)."
      },
      {
        id: "m2-2a-ex20",
        question: "[Level 2] \\(T_{r}\\) is the coefficient of \\((r + 1)\\)th-term in \\(\\left( ax + \\frac{5}{x^{2}} \\right)^{15}\\) (\\(a < 0\\)). (a) Express \\(T_{r}\\). (b) \\(T_{4}:T_{6} = 25:33\\). Find \\(a\\) and coefficient of \\(x^{12}\\).",
        answer: "(a) \\(T_{r} = C_{r}^{15}a^{r}5^{15 - r}\\)\n(b) \\(a = - 3\\); coefficient of \\(x^{12}\\) \\(= 358722675\\)",
        steps: "(a) \\(T_{r} = C_{r}^{15}a^{r}5^{15 - r}\\). (b) \\(a^{2} = 9\\Rightarrow a = - 3\\). \\(3r - 30 = 12\\Rightarrow r = 14\\Rightarrow C_{14}^{15}( - 3)^{14}(5) = 358722675\\)."
      },
      {
        id: "m2-2a-ex21",
        question: "[Level 2] \\(T_{r}\\) is coefficient of \\(r\\)th-term of \\((x + 1)^{n}\\). If \\(T_{k}:T_{k + 1}:T_{k + 2} = 6:3:1\\), find \\(n\\) and \\(k\\).",
        answer: "\\(n = 11,k = 8\\)",
        steps: "\\(\\frac{C_{k - 1}^{n}}{C_{k}^{n}} = 2\\Rightarrow 2n - 3k = - 2\\) and \\(\\frac{C_{k}^{n}}{C_{k + 1}^{n}} = 3\\Rightarrow 3n - 4k = 1\\Rightarrow n = 11,k = 8\\)."
      },
      {
        id: "m2-2a-ex22",
        question: "[Level 3] (a) Prove coefficient of \\(x^{k}\\) in \\((3 + 2x - x^{2})(1 + x)^{34}\\) is \\(3C_{k}^{35} - C_{k - 1}^{35}\\). (b) If this coefficient is \\(0\\), find \\(k\\).",
        answer: "(a) Proved.\n(b) \\(k = 27\\)",
        steps: "(a) \\((3 - x)(1 + x)^{35}\\Rightarrow 3C_{k}^{35} - C_{k - 1}^{35}\\). (b) \\(3 = \\frac{k}{35 - k + 1}\\Rightarrow k = 27\\)."
      },
      {
        id: "m2-2a-ex23",
        question: "[Level 3] Find the coefficient of \\(x^{20}\\) in the expansion of \\((1 + 2x - x^{2})^{12}\\).",
        answer: "\\(5346\\)",
        steps: "\\(\\sum_{r = 0}^{12}{C_{r}^{12}(1 + 2x)^{r}( - x^{2})^{12 - r}}\\) (\\(r \\leq 4\\)): \\(495(2^{4}) - 220(3)(2^{2}) + 66 = 5346\\)."
      },
      {
        id: "m2-2a-ex24",
        question: "[Level 3] [2324-WYK-S4-Midyear-M2-Q5] (a) Prove by M.I. that \\(1 - r^{3} + r^{6} - \\ldots + ( - 1)^{n - 1}r^{3n - 3} = \\frac{1 - ( - 1)^{n}r^{3n}}{1 + r^{3}}\\). (b) Find coefficient of \\(x^{3}\\) in \\(1 - (3x - 1) + (3x - 1)^{2} - \\ldots + (3x - 1)^{6}\\).",
        answer: "(a) Proved by mathematical induction.\n(b) \\(- 945\\)",
        steps: "(a) Standard geometric M.I. proof. (b) Let \\(r = (3x - 1)^{1/3}\\) (\\(n = 7\\)): \\(\\frac{1 + (3x - 1)^{7}}{3x}\\Rightarrow \\) coefficient of \\(x^{3}\\) is \\(C_{3}^{7}( - 1)^{7}3^{3} =\\) \\(- 945\\)."
      },
      {
        id: "m2-2a-ex25",
        question: "[Level 3] [WYK-2324-S4-Midyear-M2-Q6] \\(T_{r}\\) is coefficient of \\(r\\)th term of \\(\\left( \\frac{1}{3x^{2}} + 6x \\right)^{n}\\) in descending powers. Given \\(T_{5} = 9T_{6} + 243T_{7}\\). (a) Find \\(n\\). (b) Find coefficient of \\(x^{12}\\) in \\(\\left( \\frac{1}{3x^{2}} + 6x \\right)^{n}(9x^{2} - 6x + 1)^{3}\\).",
        answer: "(a) \\(n = 9\\)\n(b) \\(- 1768635648\\)",
        steps: "(a) \\(243n^{2} - 1215n - 8748 = 0\\Rightarrow n = 9\\). (b) \\((6x + \\frac{1}{3x^{2}})^{9}(3x - 1)^{6}\\Rightarrow 6^{9}( - 540) + 9(6)^{8}(\\frac{1}{3})(729) = - 1768635648\\)."
      },
      {
        id: "m2-2a-ex26",
        question: "[Level 3] In \\(\\left( \\frac{x^{2}}{2} + \\frac{2}{x} \\right)^{n}\\), sum of coefficients of \\(5^{th}\\) and \\(6^{th}\\) terms is \\(48\\) times coefficient of \\(7^{th}\\) term. (a) Find \\(n\\). (b) Find coefficient of \\(x^{- 5}\\) in \\(\\left( \\frac{x^{2}}{2} + \\frac{2}{x} \\right)^{n}(12x - 4x^{2} - 9)^{4}\\).",
        answer: "(a) \\(n = 8\\)\n(b) \\(- 24509952\\)",
        steps: "(a) \\(2n^{2} - 19n + 24 = 0\\Rightarrow n = 8\\). (b) \\(\\frac{(x^{3} + 4)^{8}(2x - 3)^{8}}{256x^{8}}\\Rightarrow \\frac{1}{256}(C_{1}^{8}4^{7}( - 3)^{8} + 4^{8}C_{3}^{8}2^{3}( - 3)^{5}) = - 24509952\\)."
      },
      {
        id: "m2-2a-ex27",
        question: "[Level 3] \\((1 + px)^{n} = \\sum_{r = 0}^{n}{a_{r}x^{r}}\\). (a) Show \\(\\frac{a_{r}}{a_{r - 1}} \\geq 1\\) if \\(1 \\leq r \\leq \\frac{(n + 1)p}{p + 1}\\). (b) If \\(a_{k}\\) is the greatest coefficient in \\((3 + 5x)^{18}\\), find \\(k\\).",
        answer: "(a) Shown.\n(b) \\(k = 11\\)",
        steps: "(a) \\(\\frac{C_{r}^{n}p^{r}}{C_{r - 1}^{n}p^{r - 1}} = \\frac{p(n - r + 1)}{r} \\geq 1\\). (b) \\(p = \\frac{5}{3},n = 18\\Rightarrow \\frac{19(5/3)}{8/3} = 11.875\\Rightarrow k = 11\\)."
      },
      {
        id: "m2-2a-ex28",
        question: "[Level 3] (a) Prove \\(C_{r}^{n} + C_{r + 1}^{n} = C_{r + 1}^{n + 1}\\). (b) Prove by M.I. that \\(\\sum_{k = 0}^{n}C_{k}^{n} = 2^{n}\\).",
        answer: "(a) Proved.\n(b) Proved by mathematical induction.",
        steps: "(a) Pascal's identity proof via factorials. (b) Base case \\(n = 1\\): \\(2\\). Inductive step splits and pairs using (a) to get \\(2\\sum_{k = 0}^{m}C_{k}^{m} = 2^{m + 1}\\)."
      },
      {
        id: "m2-2a-ex29",
        question: "[Level 3] (a) By considering \\(2^{n} = (1 + 1)^{n}\\), show \\(\\sum_{k = 0}^{n}C_{k}^{n} = 2^{n}\\). (b) By \\((1 + ( - 1))^{n} = 0\\), show \\(\\sum_{k = 0}^{n}{( - 1)^{k}C_{k}^{n}} = 0\\). (c) By \\((1 + x)^{n}(1 + x)^{n} = (1 + x)^{2n}\\), show \\(\\sum_{k = 0}^{n}{(C_{k}^{n})^{2}} = C_{n}^{2n}\\).",
        answer: "(a) Shown.\n(b) Shown.\n(c) Shown.",
        steps: "Compare expansions and equate coefficients of \\(x^{n}\\) in (c) using \\(C_{r}^{n} = C_{n - r}^{n}\\)."
      },
      {
        id: "m2-2a-ex30",
        question: "[Level 3] (a) Show \\(\\sum_{r = 0}^{n}{(C_{r}^{n})^{2}} = C_{n}^{2n}\\). (b) By \\((1 - x^{2})^{2n}\\), show \\(\\sum_{r = 0}^{2n}{( - 1)^{r}(C_{r}^{2n})^{2}} = ( - 1)^{n}C_{n}^{2n}\\). (c) Prove \\((C_{1}^{2n})^{2} + (C_{3}^{2n})^{2} + \\ldots + (C_{2n - 1}^{2n})^{2} = \\frac{1}{2}(C_{2n}^{4n} + ( - 1)^{n - 1}C_{n}^{2n})\\).",
        answer: "(a) Shown.\n(b) Shown.\n(c) Proved.",
        steps: "Subtract equation (2) from equation (1) and divide by \\(2\\)."
      },
      {
        id: "m2-2a-ex31",
        question: "[Level 2] [2526-WYK-S6-Mock-M2-Q2] \\(\\left( x + \\frac{p}{x} \\right)^{n}(1 + 2x^{2})\\) has constant term \\(0\\). (a) Lincoln claims \\(n\\) must be odd. Do you agree? (b) If \\(a_{1} = 73\\) and \\(a_{2} = - 8p^{2} + 44p + 1140\\), find \\(p\\) and \\(n\\).",
        answer: "(a) Agree: \\(n\\) must be odd.\n(b) \\(p = 4,n = 9\\)",
        steps: "(a) \\(n - 2r + 2 \\neq 0\\Rightarrow n\\) must be odd (agree). (b) \\(np = 36\\) and \\(n(n - 1)p^{2} + np = - 8p^{2} + 44p + 1140\\Rightarrow p = 4,n = 9\\)."
      },
      {
        id: "m2-2a-ex32",
        question: "[Level 2] [2526-WYK-S5-Final-M2-Q2] (a) Show that if \\(\\frac{1}{x^{n}}(x^{3} - 1)^{n}\\) has a constant term, \\(n\\) is a multiple of \\(3\\). (b) Find the constant term in \\(\\frac{1}{x^{9}}(x^{5} - 1)^{7}(x^{3} - 1)^{9}\\).",
        answer: "(a) Shown.\n(b) \\(- 84\\)",
        steps: "(a) \\(2n - 3r = 0\\Rightarrow 3 \\mid n\\). (b) \\(r = 6\\Rightarrow C_{6}^{9}( - 1)^{6}( - 1) = - 84\\)."
      },
      {
        id: "m2-2a-ex33",
        question: "[Level 2] [2026-DSE-M2-Q6] (a) Prove \\(\\left( x + \\frac{1}{x^{2}} \\right)^{n} + 2\\left( x^{2} - \\frac{1}{x} \\right)^{n} = \\frac{(x^{3} + 1)^{2}(x^{6} - 1)^{n}}{x^{3n + 4}}\\). (b) Find least positive integer \\(r\\) such that coefficient of \\(x^{r}\\) in \\(\\left( x + \\frac{1}{x^{2}} \\right)^{10}\\left( x^{2} - \\frac{1}{x} \\right)^{8}\\) is non-zero, and find it. (c) Can there be a non-zero constant term for some \\(n\\)?",
        answer: "(a) Proved.\n(b) \\(r = 2\\), and the coefficient is \\(14\\)\n(c) No: there is no non-zero constant term for any \\(n\\).",
        steps: "(a) Combine over \\(x^{3n + 4}\\). (b) Numerator powers are multiples of \\(3\\), denominator is \\(x^{28}\\Rightarrow r = 2\\), coeff \\(= C_{5}^{8}( - 1)^{3} + C_{4}^{8}( - 1)^{4} = 14\\). (c) \\(3m - (3n + 4) = 0\\) has no integer solution; disagreed."
      },
      {
        id: "m2-2a-ex34",
        question: "[Level 3] \\(\\left( x + \\frac{a}{x} \\right)^{n}\\) has no constant term. (a) Explain why \\(n\\) is odd. (b) Coefficient of \\(x\\) is twice coefficient of \\(\\frac{1}{x}\\) and coefficient of \\(x^{3}\\) is \\(\\frac{6}{5}\\) times coefficient of \\(x\\). Find \\(a\\) and \\(n\\).",
        answer: "(a) \\(n\\) is odd.\n(b) \\(a = \\frac{1}{2},n = 7\\)",
        steps: "(a) \\(n - 2k \\neq 0\\Rightarrow n\\) is odd. (b) \\(a = \\frac{1}{2}\\), \\(\\frac{n - 1}{n + 3} = \\frac{3}{5}\\Rightarrow n = 7\\)."
      }
    ],

    // ---- M2 Chapter 3: More about Trigonometric Functions ----
    more_about_trigonometric_functions: [
      {
        id: "m2-3a-ex1",
        question: "[Level 1] Given \\(\\tan\\theta + \\sec\\theta = \\frac{2}{5}\\). By considering \\(\\tan\\theta - \\sec\\theta\\), find \\(\\tan\\theta\\) and \\(\\csc\\theta\\).",
        answer: "\\(\\tan\\theta = - \\frac{21}{20}\\), \\(\\csc\\theta = - \\frac{29}{21}\\)",
        steps: "\\(\\tan\\theta - \\sec\\theta = - \\frac{5}{2}\\Rightarrow \\tan\\theta = - \\frac{21}{20},\\sec\\theta = \\frac{29}{20}\\Rightarrow \\csc\\theta = - \\frac{29}{21}\\)."
      },
      {
        id: "m2-3a-ex2",
        question: "[Level 2] Given \\(\\sin x\\cos x = \\frac{1}{8}\\), where \\(\\sin x > \\cos x > 0\\). Find (a) \\(\\sin x + \\cos x\\), (b) \\(\\sin x - \\cos x\\), (c) \\(\\sec x + \\tan x\\).",
        answer: "(a) \\(\\frac{\\sqrt{5}}{2}\\)\n(b) \\(\\frac{\\sqrt{3}}{2}\\)\n(c) \\((2 + \\sqrt{3})(2 + \\sqrt{5})\\)",
        steps: "(a) \\(\\frac{\\sqrt{5}}{2}\\). (b) \\(\\frac{\\sqrt{3}}{2}\\). (c) \\(\\frac{1 + \\sin x}{\\cos x} = \\frac{4 + \\sqrt{5} + \\sqrt{3}}{\\sqrt{5} - \\sqrt{3}} = (2 + \\sqrt{3})(2 + \\sqrt{5})\\)."
      },
      {
        id: "m2-3a-ex3",
        question: "[Level 2] Prove (a) \\((2\\sin x + \\sec x)(2\\cos x + \\csc x) = \\frac{(2\\sin x\\cos x + 1)^{2}}{\\sin x\\cos x}\\), (b) \\(\\frac{1 + \\sin x + \\cos x}{1 + \\sin x - \\cos x} = \\frac{1 + \\cos x + \\cot x + \\csc x}{1 + \\sin x}\\), (c) \\(\\frac{\\sec x + \\tan x}{\\sec x - \\tan x} = 2\\tan^{2}x + 2\\sec x\\tan x + 1\\).",
        answer: "(a) Proved.\n(b) Proved.\n(c) Proved.",
        steps: "Standard trigonometric identity proofs using \\(\\sin^{2}x + \\cos^{2}x = 1\\) and \\(\\sec^{2}x - \\tan^{2}x = 1\\)."
      },
      {
        id: "m2-3a-ex4",
        question: "[Level 2] Solve for \\(0 \\leq \\theta \\leq 2\\pi\\): (a) \\(4\\csc 2\\theta - 2\\sin 2\\theta = 3\\sqrt{2}\\), (b) \\(\\sec^{2}\\theta\\csc\\theta - \\frac{\\sin\\theta}{\\cos^{2}\\theta} - 2\\sin\\theta + \\csc\\theta = - 3\\).",
        answer: "(a) \\(\\theta = \\frac{\\pi}{8},\\frac{3\\pi}{8},\\frac{9\\pi}{8},\\frac{11\\pi}{8}\\)\n(b) \\(\\theta = \\frac{7\\pi}{6},\\frac{11\\pi}{6}\\)",
        steps: "(a) \\(2\\sin^{2}2\\theta + 3\\sqrt{2}\\sin 2\\theta - 4 = 0\\Rightarrow \\sin 2\\theta = \\frac{\\sqrt{2}}{2}\\Rightarrow \\theta = \\frac{\\pi}{8},\\frac{3\\pi}{8},\\frac{9\\pi}{8},\\frac{11\\pi}{8}\\). (b) \\(2\\sin^{2}\\theta - 3\\sin\\theta - 2 = 0\\Rightarrow \\sin\\theta = - \\frac{1}{2}\\Rightarrow \\theta = \\frac{7\\pi}{6},\\frac{11\\pi}{6}\\)."
      },
      {
        id: "m2-3a-ex5",
        question: "[Level 1] (a) Prove \\(\\sin x + \\cos x = \\sqrt{2}\\sin\\left( x + \\frac{\\pi}{4} \\right)\\). (b) Solve \\(\\sqrt{2}\\csc x + \\cot x = - 1\\) for \\(0 \\leq x \\leq 2\\pi\\).",
        answer: "(a) Proved.\n(b) \\(x = \\frac{5\\pi}{4}\\)",
        steps: "(a) Expand R.H.S. (b) \\(\\sin\\left( x + \\frac{\\pi}{4} \\right) = - 1\\Rightarrow x = \\frac{5\\pi}{4}\\)."
      },
      {
        id: "m2-3a-ex6",
        question: "[Level 2] (a) If \\(\\tan A - 3\\cot B = 0\\), prove \\(\\cos(A - B) + 2\\cos(A + B) = 0\\). (b) Solve \\(\\tan\\left( x + \\frac{\\pi}{5} \\right) = 3\\cot\\left( \\frac{2\\pi}{15} - x \\right)\\) for \\(0 \\leq x \\leq 2\\pi\\).",
        answer: "(a) Proved.\n(b) \\(x = \\frac{7\\pi}{15}\\) or \\(\\frac{22\\pi}{15}\\)",
        steps: "(a) \\(\\sin A\\sin B = 3\\cos A\\cos B\\). (b) \\(\\cos\\left( 2x + \\frac{\\pi}{15} \\right) = - 1\\Rightarrow x = \\frac{7\\pi}{15}\\) or \\(\\frac{22\\pi}{15}\\)."
      },
      {
        id: "m2-3a-ex7",
        question: "[Level 2] Solve for \\(0 \\leq \\theta \\leq \\pi\\): (a) \\(\\frac{\\cos 3\\theta}{\\sec\\theta} + \\frac{\\sin 3\\theta}{\\csc\\theta} = \\frac{\\sqrt{3}}{2}\\), (b) \\(\\sqrt{3}(\\tan\\theta + \\tan 3\\theta) + \\tan\\theta\\tan 3\\theta = 1\\), (c) \\(\\sec\\left( \\frac{\\pi}{4} + \\theta \\right) + \\csc\\left( \\frac{3\\pi}{4} - \\theta \\right) = 4\\sqrt{2}\\cos\\theta\\), (d) \\(\\sin\\left( \\frac{\\pi}{5} + \\theta \\right)\\cos\\left( \\frac{\\pi}{4} - 2\\theta \\right) + \\cos\\left( \\frac{\\pi}{5} + \\theta \\right)\\sin\\left( \\frac{\\pi}{4} - 2\\theta \\right) = \\cos\\left( \\frac{\\pi}{10} - 2\\theta \\right)\\).",
        answer: "(a) \\(\\theta = \\frac{\\pi}{12},\\frac{11\\pi}{12}\\)\n(b) \\(\\theta = \\frac{\\pi}{24},\\frac{7\\pi}{24},\\frac{13\\pi}{24},\\frac{19\\pi}{24}\\)\n(c) \\(\\theta = \\frac{\\pi}{2},\\frac{\\pi}{6},\\frac{5\\pi}{6}\\)\n(d) \\(\\theta = \\frac{\\pi}{60},\\frac{3\\pi}{20},\\frac{41\\pi}{60}\\)",
        steps: "(a) \\(\\cos 2\\theta = \\frac{\\sqrt{3}}{2}\\Rightarrow \\theta = \\frac{\\pi}{12},\\frac{11\\pi}{12}\\). (b) \\(\\tan 4\\theta = \\frac{1}{\\sqrt{3}}\\Rightarrow \\theta =\\) \\(\\frac{\\pi}{24},\\frac{7\\pi}{24},\\frac{13\\pi}{24},\\frac{19\\pi}{24}\\). (c) \\(\\theta = \\frac{\\pi}{2},\\frac{\\pi}{6},\\frac{5\\pi}{6}\\). (d) \\(\\sin\\left( \\frac{9\\pi}{20} - \\theta \\right) = \\sin\\left( \\frac{2\\pi}{5} + 2\\theta \\right)\\Rightarrow \\theta = \\frac{\\pi}{60},\\frac{3\\pi}{20},\\frac{41\\pi}{60}\\)."
      },
      {
        id: "m2-3a-ex8",
        question: "[Level 2] Prove (a) \\(\\cos^{2}B + \\cos^{2}(A + B) - 2\\cos A\\cos B\\cos(A + B) = \\sin^{2}A\\), (b) \\(\\frac{\\cos A - \\cos B\\cos(A - B)}{\\sin A - \\cos B\\sin(A - B)} = \\tan(B - A)\\), (c) \\(\\sin 4A\\sin 2A(1 - \\cos 2A) + \\cos 4A\\cos 2A(1 + \\cos 2A) = \\cos 2A(1 + \\cos 6A)\\).",
        answer: "(a) Proved.\n(b) Proved.\n(c) Proved.",
        steps: "Compound-angle expansions and factoring."
      },
      {
        id: "m2-3a-ex9",
        question: "[Level 3] Let \\(\\frac{\\pi}{2} < \\theta < \\frac{3\\pi}{2}\\). (a) Prove \\(\\frac{\\tan\\theta + \\sec\\theta - 1}{\\tan\\theta - \\sec\\theta + 1} = \\tan\\theta + \\sec\\theta\\). (b) Find \\(h,k\\) (\\(0 < k < \\frac{\\pi}{2}\\)) such that \\(h\\sin(\\theta + k) \\equiv \\sin\\theta + \\sqrt{3}\\cos\\theta\\). (c) Solve \\(\\frac{\\tan\\theta + \\sec\\theta - 1}{\\tan\\theta - \\sec\\theta + 1} + \\sqrt{3} = 0\\).",
        answer: "(a) Proved.\n(b) \\(h = 2,k = \\frac{\\pi}{3}\\)\n(c) \\(\\theta = \\frac{5\\pi}{6}\\)",
        steps: "(a) Replace \\(1\\) with \\(\\sec^{2}\\theta - \\tan^{2}\\theta\\). (b) \\(h = 2,k = \\frac{\\pi}{3}\\). (c) \\(2\\sin\\left( \\theta + \\frac{\\pi}{3} \\right) = - 1\\Rightarrow \\theta = \\frac{5\\pi}{6}\\)."
      },
      {
        id: "m2-3a-ex10",
        question: "[Level 1] [2526-WYK-S4-Midyear-M2-Q4] Let \\(0 < \\theta < \\pi\\). (a) Prove \\(\\frac{\\tan\\theta}{1 - \\tan\\theta} + \\frac{\\cot\\theta}{1 + \\cot\\theta} = \\sec 2\\theta\\). (b) Solve \\(\\frac{\\tan\\theta}{1 - \\tan\\theta} + \\frac{\\cot\\theta}{1 + \\cot\\theta} = 2\\).",
        answer: "(a) Proved.\n(b) \\(\\theta = \\frac{\\pi}{3}\\) or \\(\\frac{5\\pi}{6}\\)",
        steps: "(a) \\(\\frac{\\tan^{2}\\theta + 1}{1 - \\tan^{2}\\theta} = \\frac{1}{\\cos 2\\theta} = \\sec 2\\theta\\). (b) \\(\\cos 2\\theta = \\frac{1}{2}\\Rightarrow \\theta = \\frac{\\pi}{3}\\) or \\(\\frac{5\\pi}{6}\\)."
      },
      {
        id: "m2-3a-ex11",
        question: "[Level 1] Prove (a) \\(\\tan 2x - 2\\tan 2x\\sin^{2}x = \\sin 2x\\), (b) \\(\\frac{(\\sin x + \\cos x)^{2}}{\\sec 2x + \\tan 2x} = \\cos 2x\\), (c) \\(\\frac{\\cos^{2}\\theta - \\cot\\theta}{\\cos^{2}\\theta + \\cot\\theta} = 1 - \\frac{4}{\\sin 2\\theta + 2}\\).",
        answer: "(a) Proved.\n(b) Proved.\n(c) Proved.",
        steps: "Double-angle identities."
      },
      {
        id: "m2-3a-ex12",
        question: "[Level 2] Solve for \\(0 \\leq \\theta \\leq 2\\pi\\): (a) \\(\\cos 3\\theta\\cos\\theta = - \\sin\\theta(\\sin 3\\theta + \\sin\\theta)\\), (b) \\(3\\tan 2\\theta - 6\\tan 2\\theta\\sin^{2}\\theta = 4\\sin\\theta\\cos\\theta\\), (c) \\(\\sec\\theta = 2\\sin\\theta(1 + \\tan\\theta)\\).",
        answer: "(a) \\(\\theta = \\frac{\\pi}{2},\\frac{3\\pi}{2}\\)\n(b) \\(\\theta = 0,\\frac{\\pi}{2},\\pi,\\frac{3\\pi}{2},2\\pi\\)\n(c) \\(\\theta = \\frac{\\pi}{8},\\frac{5\\pi}{8},\\frac{9\\pi}{8},\\frac{13\\pi}{8}\\)",
        steps: "(a) \\(\\sin\\theta = \\pm 1\\Rightarrow \\theta = \\frac{\\pi}{2},\\frac{3\\pi}{2}\\). (b) \\(\\sin 2\\theta = 0\\Rightarrow \\theta =\\) \\(0,\\frac{\\pi}{2},\\pi,\\frac{3\\pi}{2},2\\pi\\). (c) \\(\\tan 2\\theta = 1\\Rightarrow \\theta =\\) \\(\\frac{\\pi}{8},\\frac{5\\pi}{8},\\frac{9\\pi}{8},\\frac{13\\pi}{8}\\)."
      },
      {
        id: "m2-3a-ex13",
        question: "[Level 2] [2015-DSE-M2-Q7] (a) Prove \\(\\sin^{2}x\\cos^{2}x = \\frac{1 - \\cos 4x}{8}\\). (b) Let \\(f(x) = \\sin^{4}x + \\cos^{4}x\\). (i) Express \\(f(x)\\) as \\(A\\cos Bx + C\\). (ii) Solve \\(8f(x) = 7\\) for \\(0 \\leq x \\leq \\frac{\\pi}{2}\\).",
        answer: "(a) Proved.\n(b)(i) \\(f(x) = \\frac{1}{4}\\cos 4x + \\frac{3}{4}\\)\n(b)(ii) \\(x = \\frac{\\pi}{12}\\) or \\(\\frac{5\\pi}{12}\\)",
        steps: "(a) \\(\\frac{\\sin^{2}2x}{4} = \\frac{1 - \\cos 4x}{8}\\). (b) (i) \\(\\frac{1}{4}\\cos 4x + \\frac{3}{4}\\). (ii) \\(\\cos 4x = \\frac{1}{2}\\Rightarrow x = \\frac{\\pi}{12}\\) or \\(\\frac{5\\pi}{12}\\)."
      },
      {
        id: "m2-3a-ex14",
        question: "[Level 2] [2024-DSE-M2-Q4] (a) Prove \\(\\csc 2x - \\cot 2x = \\tan x\\). (b) Solve \\((\\csc 3\\theta - \\cot 3\\theta)(\\csc\\theta - \\cot\\theta) = 1\\) for \\(\\frac{\\pi}{6} < \\theta < \\frac{\\pi}{3}\\).",
        answer: "(a) Proved.\n(b) \\(\\theta = \\frac{\\pi}{4}\\)",
        steps: "(a) \\(\\frac{1 - \\cos 2x}{\\sin 2x} = \\tan x\\). (b) \\(\\tan\\left( \\frac{3\\theta}{2} \\right)\\tan\\left( \\frac{\\theta}{2} \\right) = 1\\Rightarrow \\theta = \\frac{\\pi}{4}\\)."
      },
      {
        id: "m2-3a-ex15",
        question: "[Level 2] [WYK-2324-S4-Final-I-Q4] (a) Prove \\(\\sec 2x - \\tan 2x = \\tan\\left( \\frac{\\pi}{4} - x \\right)\\). (b) Solve \\(\\sec 2x + \\tan 2x = \\sqrt{3}\\) for \\(0 < x < \\frac{\\pi}{2}\\).",
        answer: "(a) Proved.\n(b) \\(x = \\frac{\\pi}{12}\\)",
        steps: "(a) \\(\\frac{1 - \\sin 2x}{\\cos 2x} = \\frac{\\cos x - \\sin x}{\\cos x + \\sin x} = \\tan\\left( \\frac{\\pi}{4} - x \\right)\\). (b) \\(\\tan\\left( x + \\frac{\\pi}{4} \\right) = \\sqrt{3}\\Rightarrow x = \\frac{\\pi}{12}\\)."
      },
      {
        id: "m2-3a-ex16",
        question: "[Level 2] [2425-WYK-S5-Final-M2-Q3] (a) Prove \\(\\csc 2x + \\cot 2x = \\cot x\\). (b) Solve \\(\\tan 4x(\\csc 2x - \\cot 2x) = 1\\) for \\(0 < x < \\frac{\\pi}{2}\\).",
        answer: "(a) Proved.\n(b) \\(x = \\frac{\\pi}{10}\\) or \\(\\frac{3\\pi}{10}\\)",
        steps: "(a) \\(\\frac{1 + \\cos 2x}{\\sin 2x} = \\cot x\\). (b) \\(\\tan 4x = \\cot x\\Rightarrow x = \\frac{\\pi}{10}\\) or \\(\\frac{3\\pi}{10}\\)."
      },
      {
        id: "m2-3a-ex17",
        question: "[Level 2] [2526-WYK-S6-Mock-M2-Q4] (a) Prove \\(\\frac{\\tan^{2}x + \\cot^{2}x}{\\sec^{2}x + \\csc^{2}x} = \\frac{3}{4} + \\frac{1}{4}\\cos 4x\\). (b) Solve \\(\\frac{2}{\\sec^{2}x + \\csc^{2}x} - \\frac{5}{4}\\cos 4x = 1\\) for \\(0 < x < \\frac{\\pi}{2}\\).",
        answer: "(a) Proved.\n(b) \\(x = \\frac{\\pi}{6}\\) or \\(\\frac{\\pi}{3}\\)",
        steps: "(a) \\(\\sin^{4}x + \\cos^{4}x = 1 - \\frac{1}{2}\\sin^{2}2x = \\frac{3}{4} + \\frac{1}{4}\\cos 4x\\). (b) \\(\\cos 4x = - \\frac{1}{2}\\Rightarrow x = \\frac{\\pi}{6}\\) or \\(\\frac{\\pi}{3}\\)."
      },
      {
        id: "m2-3a-ex18",
        question: "[Level 2] Let \\(\\frac{\\pi}{8} < x < \\frac{\\pi}{4}\\). (a) Find \\(\\alpha,\\beta\\) such that \\(\\cot x - \\tan x = \\alpha\\cot\\beta x\\). (b) Solve \\(\\cot x + 8 = \\tan x + 2\\tan 2x + 4\\tan 4x\\).",
        answer: "(a) \\(\\alpha = 2,\\beta = 2\\)\n(b) \\(x = \\frac{7\\pi}{32}\\)",
        steps: "(a) \\(\\alpha = 2,\\beta = 2\\). (b) Telescopes to \\(8\\cot 8x = - 8\\Rightarrow \\tan 8x = - 1\\Rightarrow x = \\frac{7\\pi}{32}\\)."
      },
      {
        id: "m2-3a-ex19",
        question: "[Level 3] Let \\(- \\frac{\\pi}{4} < \\theta < \\frac{\\pi}{4}\\). (a) Prove \\(\\frac{\\sin\\theta}{1 + \\tan\\theta} - \\frac{\\cos\\theta}{1 - \\tan\\theta} = \\frac{\\cos\\theta}{1 - 2\\cos^{2}\\theta}\\). (b) Solve \\(\\frac{\\sin(\\pi + \\theta)}{1 + \\tan\\theta} - \\frac{\\cos(\\pi + \\theta)}{1 - \\tan\\theta} = 2\\cos\\theta\\).",
        answer: "(a) Proved.\n(b) \\(\\theta = \\frac{\\pi}{6}\\) or \\(- \\frac{\\pi}{6}\\)",
        steps: "(a) \\(\\frac{- \\cos\\theta}{\\cos^{2}\\theta - \\sin^{2}\\theta} = \\frac{\\cos\\theta}{1 - 2\\cos^{2}\\theta}\\). (b) \\(\\cos\\theta(3 - 4\\cos^{2}\\theta) = 0\\Rightarrow \\theta = \\frac{\\pi}{6}\\) or \\(- \\frac{\\pi}{6}\\)."
      },
      {
        id: "m2-3a-ex20",
        question: "[Level 3] (a) Prove \\(\\frac{1 + \\cos 2x - \\sin 2x}{1 - \\cos 2x - \\sin 2x} = - \\cot x\\). (b) Solve \\(\\frac{1 + \\cos 2x - \\sin 2x}{1 - \\cos 2x - \\sin 2x} + \\frac{1 - \\cos 2x - \\sin 2x}{1 + \\cos 2x - \\sin 2x} - \\frac{1 + \\cos 2x + \\sin 2x}{1 - \\cos 2x + \\sin 2x} = - \\frac{7\\sqrt{3}}{3}\\) for \\(0 \\leq x \\leq \\frac{\\pi}{4}\\).",
        answer: "(a) Proved.\n(b) \\(x = \\frac{\\pi}{6}\\)",
        steps: "(a) \\(\\frac{2\\cos x(\\cos x - \\sin x)}{2\\sin x(\\sin x - \\cos x)} = - \\cot x\\). (b) \\(- \\cot x - \\tan x - \\cot x = - \\frac{7\\sqrt{3}}{3}\\Rightarrow 6\\cot^{2}x - 7\\sqrt{3}\\cot x + 3 = 0\\Rightarrow \\cot x = \\sqrt{3}\\Rightarrow x = \\frac{\\pi}{6}\\)."
      }
    ]
  }
};
