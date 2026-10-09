'use client'
import { useState, useEffect, useCallback } from 'react'

const PASSWORD = "Conan1977%@"
const LOGO_SRC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAd4klEQVR42u2de3xc1XXvv2ufMw9JMyNblmRZfmHLD0x4mYd5BCJDSHgkQIEOLSRpoJBwU5qWED69uWluVefRT29ub3sT0oZ+Um5Iyg0BBUIKoYUEahFe5hIIgQgw+CGDH3pa0kgazcw5Z98/9jkzo4dt2ZZGktH+fEYajc7MnHN+e631W2uvtTbMjbkxN+bG3Jgbc2NuzI1JH/I+uDY5yLXqcZ7rY+kmWMcIkBaNjRbHHafYsEFobR0N2EQeZjQ1KcB8VlubzHYhkFl6zorGRqGlxT2IxEWpi8UJlSVQoThIFAlF0FoBGq1zQJpcbohstp/u7hSQOuC3JpMWHR1CS4s3ZlLMAXzUQ9HYqNi40WPTJm/Ef+LxBSQSq4hETiAkx4O1CpGlCAsRqQQqUMpGZOQVa0Br0Fqj9RCaAbTuQuvdaL0dz9mK67zOsPMWe/e+OwbQxkablhYNeDMZbJnRk6+x0RoDak1NHRXRDYQj56Oss1FqHUoWYFnkQUQXACT/e7TUmYPFf5P4P6TolngeOG4a7W3Dc3+N6/6KgfRz7Nv3xjhgez7YcwAfUlqTSaG52c2/Ul+/horoJSj7Y1hqA7Y9D6UKIGitAdcHshg4mcB16qJn2p8N2v8M5T8M8FqD47i43mto7wmyw4+y493nASdvvzdtkpkk1TMJYIumJp2X1lishoU1VxIK/QGWdT4hOwISAOqhtQcIImqKr0P7wHsgghIrD7jrguO04joPMTRwP++1vz7CZjc3TzvQMiMktqmJPLD19eupKL+JkJ0kFKpFfFA9zykRoBMAXBvbK2KhlCACuZyD4z5BLvMvbG97JC/VSSyap0+iZVqBLVbFS5Y0UlH+59jWFYRCli+pRu1OP6gHG0abKGWjlJmMudyrZDP/yLad9wLpIpfUfT/4wUIyadHa6tHaqllWfy51df9ERfnfEAmvA1ReWkHNcHAp0ioazzNayLYXEY5cTlXVNVTGsuzvfQ1waGpStLRIKaVZpmFCuT4bXkVVoolQ5JPYNriuRmtvFgA6ASWuPUQ0ShkBymZfZnjor9nx7iNFrNs5tgAuXFSYhhVfJBr9EqFQogjYYyGqNlZ9gwFaaxjOPMj+3i/R2fkOGkGQqXatSgGwQqMRNPX151IZ+xaR6Bk+cXKPUWDHk2iwLEUu10s63cT2nd8uhW1WJVDJHgKsWvlXzK98mkj0DBzHQWv9vgA38KdB4TguljWPePxbHL/631m4cAXg0thozz6AzUm7zJu3nLWrf0EstgnLMhcpYnNsr2QdCGgLrTWu6xAtu4QFVVtYvvxqWlocf5Fj0u+JTBm4LS0OSxd9hPi8HxAOLcJxHF9i33/Ajq+2XSzLuIPp9Dd4Z/tXioRu0uyyNekTJpm0eOwxlxXLbiVe+X+x7QSu+/6V2oOpbc/zEPGIRhtJxE+mu+cxIOPjMimulJpUcJuaTOCiYcU3SVR+B6XAdb33ja09Mtts4TgO5eVXc/ya/6SqaolPuqzJAWWywDURJ82qld8jFrsZ13X8k5yT2ompbAfbtslkttHZfRldXVsng2GrSZNcEVi98t4icOdU8uFJs43jOEQiDdRUP0ld1brJkGQ5anCTSWXU8sp7icc+gePkEAnNIXYU5Mu2LTKZ9+jsvpCurrePRpLlqMBtbLRoaXFoWHEX8fgtc+BOOsjbae9spKfnvSNl10euogNwVyz/KvH4LbjuHLiT6S8bdb2S2upHqCLhL1FKaQAO/NzlS28gHv/vRTZ3bky2TY5GT6V61X2IQDJ52MGQIzHgFm1tLosXnkUi8ZCfOjPHlqfOV84RiRxPeXkFzz77OI2NNm1t3lRJsKKpSROPLyBe+WPsUBjPkzlwpxTkEK7rEKu4gxXLkrS0OCSTExbMwwMmUM2rGh4iVnGVH36cU81TTrrwUAKOk6Kr5zQ6OrZPlHRNXIKTSUOqjlt6CxXlV+G6c+CWTIpReJ4mHK5kfuIegnSnCQjoREVd0dqqqalpYH7lQ4iy/ckxp5pLa48dIpEVRMsGeO65Z/3UJ330Emxmi2Ze5T8SCsfwPD0H7jS5T57nUh7dxJKaVX5arjo6gJNYNDe7LF16LWXRi/2VobnFg+lS1p4H4XA55Yn/DWhf+I6YZAV6vpy1a14nGlmG62p/FWQmzezJvIUj/9C6UAIzc4YRst7+y9m161EOEsq0D6GaTZz5uGW3URZdPuNYc6G6IGCbY+jnQZjpxI5VCiKRmQWy1qCUpiz6t8DjPrjjpuPKIdS3pqKihmVL3iQUmjei9mcmgJvLQTwG1dXka5VGVBGKr4MUogQt4t8Fs/ilg/8X/+2nNpvKJkH39sGudyE0w6KwQUZIqv+P2d72/QOl4sohfd6Vx32DROLLM0p6A3DrFiLLlqLb2xlTGegDiwhks+b4g6n14O/ycrAMxRDPhYULwfPQzz4P4fDMkWStPSxLyGS28ebWE4HseKpIDmqJ4vEqltS/RThc5c/sGcKctQHv9PXw0suQyZi/g2vTvmrNZY36Xr4cWbsaaqvBsskXj0kg4cFzhX74EejuBts/biiNfOxi9Lu74e1tEI3MJJCNFPf3fYodu+4dT4rtA0ivCWpUV32aSHgBzgxjzp6GWBQZHETnclBeZl4rtpvDw0bC/zCJnLEeqahAW6YSRluWOUYpUOL/tsBS8PwWdCpl7K5v1fTuvcYU+AWGM8oeC5pw9HbgR2ze7I7WTPa4bzGtESKEI58zpZMz0OfV5sRM9WER0xUx4C6qQ33xz6B+EQyljS1Vgg6AldEAG5C14xSYs84TmrxtnnF+set5hEPrWbZ4IyJPjWbU6oDkaln9R4iEV+F5M88tOqh0exCNoG65CWqqoa8ftEZiFVBZicTjEI9Dwn9UJiCRML8rE4g1y1x8Y4uhrOyzvudzCAlOJqG5GSJln0YpjeN4MxXgMX6BUjAwgFx6MaxcAakUhGyIRtGvvoZ+4f+hMxkjtUUMusC8Bd3ZZeyvSSKcLdEtsO2PUV29iObmvRQtRNhj7llzs0ttxULs0EfxPJnJUSs9nn8YCiGnnlRgzWVl6OdeQN/5XaPK1QFsaPBSWbTgcs2e6JaLHYqRqLiSrq67aGxUfs+QUSq6sdGAWVZ9GeFQAq1dZnDMeXTQCdeFigqoqgLXMUA5Djz+S/O8MmH+H4uNfcT9x+wCt1iSNaGw0c8bN3rj2+DaWjOPo6ErEQlaFcyaiZxX00r5rpJANofOZo1v67pBO4jC41hobGdWmgTLOoeqqiV+Oww1GmCjnisr56Os82a6emYi0BTz/wPN1fQwDA3BUNr81rMScMHTLqFQGYnEhb42VqNtsAJc4vENhOwFfhcbNdNl9qjgUArWroGQjWjQArS96wdOZttqqNaIQMS+CPhhoI3tIvsrtLRAJLwRZTGT2fOEJfhABwWLFJEI6r/dAbU14LqIZeH92R2wbbsJdMw2Na01KOtcIERzcw4/vmeGz7qwrXMOEcY8toaTM4w7lwPHQfSstclmrVipFSxcuCZ4TRWB6VFVlUCpE4paF80GWjU5n+Kr5FlMuQRwsW1FefmpgR1WI64yElmFparRsyMlRzM3RplhY4ctWT/STfIZF2XhtVi2oPGOmYuW6dAK03y1tnVC4PaOVMOijvdXS46NXsgTodnCLGTMB2Zavpu3AkwunRoR4FDWilmlkSZyQBCaPBiIWh8bal+CQnxVRyJRWVDRJ5xgrsuSpbNJU8lokJQyPuxwGr99BJSVIQ0rITVwkGDIMeYwKJUgFqsJABY/tCVoqTGzeZZesVIwNITe0QZhP4cqk0WuvRo5/4PvDxustUYphaVrRgY6IIqQmE1XOe5qkmWhf/Usct65JkPDyUGsAvni55H2DuPvWn4xpG2ZtWHHyS8yHAPM3DS9se35IwGOx8sRic2ozMnD5VBaQzQKW99B/+xR5PprYWDQqG3HhbpaRNloK8jo8CNaMzP3+ai4FnaoIgDY3KdEogyRWRWf0+ORJ8+D8nL0v/3chGevuRLKYkZKHQ8tOfB8gC1Ffq8HP09rzKSZaTlYE/WFRWIjJdhx7FlVkuJpJBJB5xyTgTGOJOuHH0W/3opcdIHJqqxMmOS6fA6WL8UB2EqN9BBFIJuBSNjIwWwSck10tA2ePcOyYHDQJMitWmkS0y1rpKRpDbEK2LkLfdfd6HgFVIxa0B+dMSCYHK5w2LzkulBfjyxfjn76VwZob9bEgGQkwJbl+kuEs0ENGUBffwPWrEJOPRlcb2SecwCY8pPf8wv8jMjBGvEcjDYIJoEyKlw/vwX6UzMr8f2QHoXkAoDNGbt9GUhkgbJZQyQAfvcGOhyamGc3kWNGA5jJGKBnC7jiR7Ncr3+kBLcPppmv04hUzipSEQlPnAUfyXUF68KzjWVrd6gQyTJjEK37D+Rizmh1PdWfP7vANevCw05vQUWb/QM8YH/eLZjOYJbI2O/Xo6oXDnV+xccejBhZqlAZUbybmlL+Cqs3/vkFodDiKFrxObnudN09heeB5LoLKvrapIJmF7zd+WjIdOVjBZWDjjOKVNm+uwJk/QyM4r0KR7lQ+SKxTNbULik1VhI9DQMp87nhMAwOmtfLy00SnuuYNNvR55fJmvKYWEXB3RoYgJzjEzvLr2UqueRr3wYPMux1FQDu6DB3ynF3TavUam1u3MJaZM0qU7ppWdDbi37rbZMQ53mwugHZeH5B0gLpEfFrjSx080Mwbx5y7tno+x4wElXsSnmeWYj47I3op5+Fl142kS8R9L/eh3z8UljdgL77B0WsWmBoGNafjPr4pXjf+WczKYaHkcbzkMsugUgU/Ysn0Y/9h4mqlVYTGoA9r5Ouru6xfrDI1mkzv2anM+TCRjjvXAiHkf5+czqnnIRcfBH6t6+j738QKS9HVh6HzuaQIEARgKyUCYCEw8gJxyPXJU2M4l/uMdIYmJ+cgyxdgHziWkil0M9vQa663FQT3nMvcsGHkI3n4/74J0Y6bdsERDLDyFlnIp+6GXn4UfQLLyKfuxnrK1/Fc/uRnIP6+NW4p38P/Y1vQllZ6XznIIqF7AKyNDUpA7DZBxeymbdwy0qfjyViEt4u/Shy7lnoV35ryk169vsBixhy1hnwwbNhST36lVfRb209IBvUYPzWs86Ejk7kko9Cewf64UdNNMu/4VprpC9lCsSVgsGhvD3V6bT5jPHONZsFt9/UOS2sRf78VvTvfo136xegvx/1zb9BPngOOhQqdWDEd3ldc3M2b1b2iH8MpLcSi6ex7bIj7W56BA65ST4/+URkwxnop59F//sTRp0GRdj796MfexxanjE3t6J8nEhU0QtBbNlSxo7u3IPc+En0nr2mYLwyMZJkSVFVRKDCA9V/oAlp2YYnLKhC4gvQT3wfXn4FFi/Gu+NLpuXDdJFvz321wLgKpEro6dmD571T0rQdT4NtI+tPQXd0ojf/CsIR438GN9i2DQkKEtIDWz0wCAND/mPQqNJUyvxPCizau/uHsHsv6vbPw9IlhkBZChlvlozaL/qg5i4cht170Xt2Itdfj1x3rZl8fX2mSiJU4tC+iIXrQm74lUAzF6aoKTzzcN2X/Iv0SqKaPc/Yxupq2LHTSLNtmdddtyCNtu1LhTavn74e+YNrkGuuRJJXIddeYx5/dD2cdqphtGAmRmcX3j98B8rKTFF4WZnPeMdJ2prwvNZo2zL2+8t/DZZC/fPdWL98DLnjNr/wzS0lyTIEy3E7Gci8FojP2MUG13karW/Mb31ekriyrw6z2UIsOZeD5cuQP0yCEkRrdC6Hvv8nsHMXcsZpyCknmfcELRnAuCexmNEEftcciVWg33gTfeddqC/fgfqTz+B9/X/AQSR4QvbJ86CiHP38FtwrrkHO+yByzZWoW7+AbliBd9tf5Bu6lOA+emYfJvfX9PT0+7uRFwEcVDakhp4hWpbDtkNTboeD4MKwn0e1YMFIezgwAG++ZVjwggVw4jqkshItgr73x+if/NSXuFGtk9JpP4TpkynXhXgC/dRmvMX1qM/eiLyzHf3Mc4iScSVYgtYQo2PYRYETQUyHi0QC+lLo5gfRP34A9bUm5NOfQT70M/STm00nAdebegk2k+7JgGBhVr4L8xEQOju34bm/9bMRp15NWyaPim07YHWDsZEDA0a19vWjf/Yo+kcPwPMvmqvI5QpkKDVQsL0DA+bvVKowQUYSDyPZ9z2A98STyM03IB/eaOxxsdNQbOPLygrmwrLMI+fkAdOZDAymoWe/6SSwsNb4wT97xADasNI3FVIa++s4msH0k8UCO14BuCbn/Nw/KU0p5p1to198CRlKI1dfAcuWGsAyWfItFqIRA4Tts9ehtJ9BWfwYNo/BoUKocPQVWBb629+F7TsMKVLK755TFA5Vgv71b6BqPnLVFeZc+vqgvR1WrUSuuhLd+ia8tRX5k88g//V241Lt64BUCrngQ2bitu0yE2Tq76GHUoLjvsGePa9BYdvakTY4UNPpzMNEo1/BsqySBPNDNvTsx3vwYeT3r0LdfAP69d/Be3vM/+sWGpY9NGQW5OfPR046oWAoi9d/fWnUz28Z6wb5LR4YGMD7u2+hvt4E9XWFdWTLl9bAhj/yGHLbrcjqBvRzW6B6Aer6a6GqCu8vm8wkW7oE9cmb0A0r0L98Cjn5JOS6G9CvvmAiZLFYCeLS/sbaTu5hwCnulzWaZBk1vWfPb4hX/IZQ6DR/t9CpnYaeNiq5bRf6+z80kax1a5FTTslnRuodbeiWZ4zkNZ6P3PBJn2DZBZIWJNKVl6H37oPePqMFiut9/Zwttm1H3/ld5Gt/ZSTecY2kOq4BJBxGf/1vYe8+5PcuRz5yoakhfuNN9F98Bf3iS1BXi/7G/8Tr60Pd+Gnkw5cCDvoXj+Ft+trY8OjUqmePdOaBEYI6rnEI0F+x/AtUVv59SVsY+hGtfK+NRNy8NjhkVKRSRgKVMi2SRq98BbFox4X2DjNpKhNGddpFNzrICMlkYHG90QoDA+YzPQ/29/q2VxspXVCF1C00rSB27jL2vLy8kCWSTkPdQqipNXxix46C7z7VkSyzx5JiePhF3tx6Tn6LwQMCHLTgqa5eRG31W9h26VNpA/83ky0kxgXqM4gwDflhxVC40IEum/W1Qcjc4GzOfFY8Zmxz0B5JWabNoR3y02Y9E1gJfHDEmI1hv+WSbRsCpxTMqzSABosblmVcuiDcmc2ZXGvbKs1qUtDOcCD1Wbbt/N7odobWuCY7mbR46aV+KivXEIms97din/r4tOeZFZgli2FwCFm5wtyoygREIsjJJxkJ7+6BdWugthZ6egoB/bVrkLPPzIMhF5xvOt3tbEPOOtOAubDWrP6cswFZXA9dXbBurZlMqxtMovyqBujuRi6/DFm3Ft54Czl7A1K/yBCrizYaTVJdbRZIPnYJcvKJ0N5u1HndQpMIWII4IJalyGY7ae/6HJlMhrY2PVpax47mZvN7cOjOkrZy8HtMyqI6OH09WsSo6gVVUFkJ8+cZMC2FfGAdsuF0I11+v0o59ST0sy/Avg7k/HPRb29D4jFYcRwsXmTs6PpTDCNftsxMHMtCPnCCmRAnHG8WNtauhj17wHXRwxkD/oWN8PFLzHmuakCuvhK5+CJjPrJZo1Ec1/T8mD+vNBmYWnuICLnc3fT19ea9oGKn4YDEO5m02LJlD/MSG4hE1pZEigM1KyAnrIPNTxtwlcDuPcjSJYjvAwuYtdhIBDo6zdurq6Gu1thU10VWrfQrHd42S4i79yDHr4HntpiGaSd9AN58CymLIqedAvvaoe1dU8fU2WWCHb29ULMAhoaRTMZ4U9kssm07cuZp6Md/iVTNN7b67XeQqvnI6aeiX/6NAX/qIlmmBslxBhjovoFUOkVb2xjH8GB21TS1XLz4bOZXPucb7tItI1qWUceB3bSUkeb9vYa8ZLNG5ZaXG7IUTJCgP+XgoCE+6TT0pSBWbhbrI2HzufPnm6T2vn6jbmtrDDHT2nxGNmeIl/g2OGixVFFhJDOTMecRMGUwn1u30ARb+lOFc58a6TX7DacG/oFt228nmTR7a4y/vnaAEbxp9aqfUlH+eyVxmYr949FlI647so+kiIkYFYcbc7lCbnMQ9bIsc5zlhx8Dth6Ap7U5NujqHrwviIYFrLuYABYz+OL8ryA2PpXgmoUFjeOk6OhaR1fXvuLgxqFtcMEWm1BCauAvcbJZlDrq1lSHpa6D38EjAKA4cDE6lhwOF2564FIFxxVXxoZCI0EIqhmC50HNUpBgp4sS80YnyxcnAUYiUw2uYc5KKYaH/xddXXv9TSvHNfiHUrkeyaRi375W0pl/Qik1rdUPh5v7fLDjR6fDTvR9E/n+qQXXrBoNZ3YwuPPvaWpS/v5JHAnA0Nzs0dSk6OrZRCazG8tSs6bE5VgcIh5aC+nB22lnkNZNB9WqEyFNmtZWoa+vl8H0bWgtiMwBPD0azMWybIbTD9L23sOGIx186/eJR6cCwrWq4UfEKq6b23m05OB6ftSsm87uk+noaPeTMg4qbBN3e5qbNU1Nio7OP2V4eBeWZc+p6pKrZsVg+r/Q2bnPj0kc8v4fbnw58I03Mr/yKURc5nb/LoX0Gp93oP87vLPz8wfaBOtAgB2e/9XYaPPaa9uJVaQpi16M5zlzm1VOsd21bZuh9HO8vf06kknhsccmrDmPTPKCGbR65b3E4p8gl5uzx1NndxW57F72dW6gp+c9Jrjz9+Hb4OLR0uLS1KR4e/tNDA09i23baO3MITLJ4Jo9J4bpTV3jg2txmOnMR2M7zUyKxWpYsriFaGRdSUOZxzi8Pqmy6O+9hrbdDx2O3T16CTbDAywGBjrZu+8yMsM7sW3L36llbhwNuEhwb286GnCPFmAwW6hZ9PXtpLPno2Qyu3yQ59T1kalls4ggWKRSt7Kj7f8cDbhHwqIPMOOwGBrqAvk5kfBlhMPVPrtWc6gdls0VtFakBm9hZ9tdRwvuZAE8EmTX+ynRyAWEw/VzIB+GK2TKTnIMpD7Bzl0/nAxwJxPgAsjDw73kuu8nmjiFSGStr65lLhhyiCBGLtdBb+pK3n3v55MF7mQDHICsyJCmu+c+YhULiITP9juRu3PSPOZemSBGZvhlOrsvo7395ckElymUKpUnDCuW3UR5xbcJhcrnFiiKVLJSFiKQTv+Are/8KTDAqL1/JweIqRkeImYFaseuu9nfdx6Z4ZewbRtEv48XKbSvki1cN8VA6ha2vnODD66abHCnQkWPHK2tJnb9+ut76Or+V+KxMJZ1LratfAL2/rHNWjsoZaGUIpN9ip79v8+7u/+DZNKitTVQ2ZM+SnVzC/HTpYvOoyL+d0QjZ+FpihYr5BgF1nAPyxJyuW7Sma+yffu3ASbb3pZegkcSCiGZtHh+Sxtd3fdQXt6DUusJhRKYvQaOLYk2wIJtW3iekB2+h/0d1/Pu3if8a1S0tU151K+0cePWVp0nEvt7t+DpH2FbCiUnEQpFi4BmlgKt89UGtq1AC5ns46QGb2T7zjsZGO6jsdGmra1kGxdb03ITAml+6aV+evY/juYnWJZCZC2hULnfjs/1mfhskGovz4xNUqKQyT7B0PCtvLNtE/39u3xbK6WQ2umwwQf+/mRS5TPy6+qWE6+4iVDoU4RCxxU18jbBEuNHywwC1exwopT4jWMGcdx/IzN0Fzvfe3qUp+JNzw2eGUORTEpR6UWclSsvJ2z/EZa6gJCflW7aHQaSrUocIQvcOz0CVNcFx30NJ3c/fan76OjY7h8tyNS4PrMR4ALQjY1qBLOsr19LRfQKrNDlWOpMbDuar1ww1XtuvhtQQZ3LUQFpwNR5OyliISL5UhbHAc97E8d9nGzup+zc+UweSJN9ynQDO1MBLj4vRVOT9ndlM2NpTQOR+IewrQ8j6iyUasC2ZUQpS6GywPPV6AS/Ucx3isiYftSuC67bgee9gudtJjf8FDveewXI5Y8xLo83Xap4tgE8nlS7o5hniCVL1hIKnULIWo9SJyKqAUUdomL5zgATvcRAI3huFk0n2tuFq9/A9V4hl3uFvr5W+vr2j3iPAVX7oOqZKimzaRiwa2v1eKWSgE1NTTXhcC1Rux7sWpSeh1bzUMTRutwUGHugySAyiPZ6QXpxnS48Zw9pp5329g5gaMynNzUpNm9WvqRqZsHWB7M5qGDEM9jceuNGb4Q6P3pKJWxsNG7kDJfSg43/D2QrWU2Qa6OpAAAAAElFTkSuQmCC"

const LL: Record<string,string> = {high:'Probable aprobación',medium:'Aprobación posible',low:'Alto riesgo'}
const PL: Record<string,string> = {tourism:'Turismo',family:'Familia',business:'Negocios',medical:'Médico',study:'Estudios',work:'Trabajo'}
const HL: Record<string,string> = {first:'Primera vez',denied:'Rechazado',hasvisa:'Visa anterior',deported:'Deportado',withdrew:'Retirado'}

interface Evaluacion {
  id: string; name: string; email: string; phone: string; age: string
  country: string; history: string; purpose: string; occupation: string
  score: number; level: string; confidence: number; timestamp: string
  analysis?: { summary: string; strengths: {title:string;text:string}[]; risks: {title:string;text:string}[]; recommendations: {title:string;text:string}[] }
}

function Item({num,title,text}:{num:number;title:string;text:string}) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/4 p-4 mb-2">
      <p className="text-sm font-bold text-white/90 mb-1">{num}. {title}</p>
      <p className="text-sm text-white/60 leading-relaxed">{text}</p>
    </div>
  )
}

export default function PanelPage() {
  const [auth, setAuth] = useState(false)
  const [pwd, setPwd] = useState('')
  const [pwdError, setPwdError] = useState(false)
  const [data, setData] = useState<Evaluacion[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [filterLevel, setFilterLevel] = useState('')
  const [selected, setSelected] = useState<Evaluacion|null>(null)

  const login = () => {
    if (pwd === PASSWORD) { setAuth(true); setPwdError(false) }
    else { setPwdError(true) }
  }

  const load = useCallback(async () => {
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/get-evaluations')
      if (!res.ok) throw new Error('HTTP ' + res.status)
      const json = await res.json()
      setData(json.evaluaciones || [])
    } catch(e) {
      setError(e instanceof Error ? e.message : 'Error al cargar')
    }
    setLoading(false)
  }, [])

  useEffect(() => { if (auth) load() }, [auth, load])

  const filtered = data.filter(d => {
    const q = search.toLowerCase()
    const mq = !q || (d.name||'').toLowerCase().includes(q) || (d.email||'').toLowerCase().includes(q) || (d.country||'').toLowerCase().includes(q)
    return mq && (!filterLevel || d.level === filterLevel)
  })

  const total = data.length
  const high = data.filter(d=>d.level==='high').length
  const avg = total ? Math.round(data.reduce((s,d)=>s+(d.score||0),0)/total) : 0
  const today = data.filter(d=>d.timestamp&&new Date(d.timestamp).toDateString()===new Date().toDateString()).length

  const exportCSV = () => {
    const h = ['Fecha','Nombre','Email','Teléfono','País','Edad','Puntaje','Nivel','Propósito']
    const rows = data.map(d=>[
      d.timestamp?new Date(d.timestamp).toLocaleDateString('es-HN'):'',
      d.name||'',d.email||'',d.phone||'',d.country||'',d.age||'',
      d.score||'',LL[d.level]||d.level||'',PL[d.purpose]||d.purpose||''
    ])
    const csv = [h,...rows].map(r=>r.map(v=>`"${v}"`).join(',')).join('\n')
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([csv],{type:'text/csv'}))
    a.download = `evaluaciones_${new Date().toISOString().slice(0,10)}.csv`
    a.click()
  }

  // LOGIN
  if (!auth) return (
    <main className="min-h-screen bg-[#0D2222] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img src={LOGO_SRC} alt="Genius" className="size-16 rounded-full mx-auto mb-4 object-cover" />
          <h1 className="text-xl font-bold text-white uppercase tracking-widest">Panel de Evaluaciones</h1>
          <p className="text-xs text-[#C9A84C] uppercase tracking-widest mt-1">Genius Visa Consultants — Privado</p>
        </div>
        <div className="bg-[#1A3A3A] rounded-2xl p-6 border border-white/10">
          <label className="block text-sm font-semibold text-white/80 mb-2">Contraseña</label>
          <input
            type="password" value={pwd}
            onChange={e=>setPwd(e.target.value)}
            onKeyDown={e=>e.key==='Enter'&&login()}
            placeholder="••••••••"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#C9A84C] mb-3"
          />
          {pwdError && <p className="text-red-400 text-xs mb-3">Contraseña incorrecta</p>}
          <button onClick={login} className="w-full rounded-full bg-[#C9A84C] py-3 text-sm font-bold text-[#1A3A3A]">
            Entrar
          </button>
        </div>
      </div>
    </main>
  )

  // PANEL
  return (
    <main className="min-h-screen bg-[#0D2222]">
      {/* Header */}
      <header className="bg-[#1A3A3A] border-b border-white/10 px-5 py-3 flex items-center gap-3">
        <img src={LOGO_SRC} alt="Genius" className="size-10 rounded-full object-cover flex-shrink-0" />
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white">Genius Visa Consultants</p>
          <p className="text-xs text-[#C9A84C] uppercase tracking-widest">Panel de Evaluaciones — Privado</p>
        </div>
        <span className="ml-auto bg-[#C9A84C] text-[#1A3A3A] text-xs font-bold px-3 py-1 rounded-full">
          {total} evaluación{total!==1?'es':''}
        </span>
        <button onClick={load} className="ml-2 border border-white/20 text-white/60 text-xs px-3 py-1.5 rounded-lg hover:bg-white/5">
          ↻ Actualizar
        </button>
        <button onClick={()=>setAuth(false)} className="border border-white/10 text-white/40 text-xs px-3 py-1.5 rounded-lg hover:bg-white/5">
          Salir
        </button>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-5">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {[
            {val:total,label:'Total evaluaciones',color:'#C9A84C'},
            {val:high,label:'Probable aprobación',color:'#3DB89E'},
            {val:avg?avg+'/94':'—',label:'Puntaje promedio',color:'#C9A84C'},
            {val:today,label:'Hoy',color:'#3DB89E'},
          ].map(s => (
            <div key={s.label} className="bg-white/5 border border-white/8 rounded-xl p-4">
              <div className="text-2xl font-black" style={{color:s.color}}>{s.val}</div>
              <div className="text-xs text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <input type="text" value={search} onChange={e=>setSearch(e.target.value)}
            placeholder="Buscar por nombre, país o email..."
            className="flex-1 min-w-48 rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-sm text-white outline-none focus:border-[#C9A84C] placeholder:text-white/30" />
          <select value={filterLevel} onChange={e=>setFilterLevel(e.target.value)}
            className="rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-sm text-white outline-none [&>option]:bg-[#1A3A3A]">
            <option value="">Todos los niveles</option>
            <option value="high">Probable aprobación</option>
            <option value="medium">Aprobación posible</option>
            <option value="low">Alto riesgo</option>
          </select>
          <button onClick={exportCSV} className="border border-white/20 text-white/60 text-sm px-4 py-2 rounded-xl hover:bg-white/5">↓ CSV</button>
        </div>

        {/* Content */}
        {loading && (
          <div className="text-center py-16">
            <div className="size-8 rounded-full border-2 border-[#C9A84C]/20 border-t-[#C9A84C] animate-spin mx-auto mb-3" />
            <p className="text-white/40 text-sm">Cargando evaluaciones...</p>
          </div>
        )}
        {error && <p className="text-red-400 text-sm text-center py-8">{error}</p>}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-16 text-white/30">
            <p className="text-4xl mb-3">📋</p>
            <p>No hay evaluaciones aún</p>
            <p className="text-xs mt-2">Aparecerán aquí cuando los clientes completen el formulario</p>
          </div>
        )}
        {!loading && !error && filtered.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/8">
                  {['Fecha','Nombre','Email','Teléfono','País','Puntaje','Nivel','Propósito'].map(h=>(
                    <th key={h} className="text-left py-2 px-3 text-xs font-bold uppercase tracking-wider text-white/35">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(d => {
                  const lc = d.level==='high'?'#3DB89E':d.level==='medium'?'#C9A84C':'#E05252'
                  return (
                    <tr key={d.id} onClick={()=>setSelected(d)}
                      className="border-b border-white/4 hover:bg-white/4 cursor-pointer transition-colors">
                      <td className="py-3 px-3 text-white/40 text-xs">{d.timestamp?new Date(d.timestamp).toLocaleDateString('es-HN',{day:'2-digit',month:'short',year:'numeric'}):'—'}</td>
                      <td className="py-3 px-3 font-semibold">{d.name||'—'}</td>
                      <td className="py-3 px-3 text-white/55">{d.email||'—'}</td>
                      <td className="py-3 px-3 text-white/55">{d.phone||'—'}</td>
                      <td className="py-3 px-3">{d.country||'—'}</td>
                      <td className="py-3 px-3 font-bold" style={{color:'#C9A84C'}}>{d.score}/94</td>
                      <td className="py-3 px-3"><span className="text-xs font-bold px-2 py-1 rounded-full" style={{background:lc+'25',color:lc}}>{LL[d.level]||d.level}</span></td>
                      <td className="py-3 px-3 text-white/40">{PL[d.purpose]||d.purpose||'—'}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal detalle */}
      {selected && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-start justify-center overflow-y-auto p-4" onClick={e=>e.target===e.currentTarget&&setSelected(null)}>
          <div className="bg-[#1A3A3A] rounded-2xl max-w-xl w-full p-6 my-auto relative">
            <button onClick={()=>setSelected(null)} className="absolute top-4 right-4 size-7 rounded-full bg-white/8 text-white text-sm hover:bg-white/15">×</button>
            {(() => {
              const lc = selected.level==='high'?'#3DB89E':selected.level==='medium'?'#C9A84C':'#E05252'
              const waMsg = encodeURIComponent(`Hola ${selected.name}, vi tu evaluación de perfil de visa Genius. Tu puntuación fue ${selected.score}/94. Me gustaría orientarte.`)
              return (
                <>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-5xl font-black" style={{color:lc}}>{selected.score}</span>
                    <span className="text-white/35 text-lg mb-1">/94</span>
                    <span className="text-xs font-bold px-2 py-1 rounded-full mb-1" style={{background:lc+'25',color:lc}}>{LL[selected.level]||selected.level}</span>
                  </div>
                  <p className="text-xs text-white/35 mb-4">{selected.timestamp?new Date(selected.timestamp).toLocaleString('es-HN'):''}</p>
                  <div className="grid grid-cols-2 gap-2 bg-white/4 rounded-xl p-3 mb-4 text-xs">
                    {[['Nombre',selected.name],['País',selected.country],['Email',selected.email],['Teléfono',selected.phone],['Edad',selected.age+' años'],['Propósito',PL[selected.purpose]||selected.purpose],['Ocupación',selected.occupation],['Historial',HL[selected.history]||selected.history]].map(([k,v])=>(
                      <div key={k}><span className="text-white/40">{k}:</span> <strong>{v||'—'}</strong></div>
                    ))}
                  </div>
                  {selected.analysis?.summary && <>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/50 border-l-2 border-white/20 pl-2 mb-2 mt-3">Resumen</div>
                    <div className="bg-white/4 rounded-xl p-3 text-xs text-white/65 leading-relaxed mb-2">{selected.analysis.summary}</div>
                  </>}
                  {selected.analysis?.strengths?.length ? <>
                    <div className="text-xs font-bold uppercase tracking-widest border-l-2 pl-2 mb-2 mt-3" style={{borderColor:'#3DB89E',color:'#3DB89E'}}>Fortalezas ({selected.analysis.strengths.length})</div>
                    {selected.analysis.strengths.map((s,i)=><Item key={i} num={i+1} title={s.title} text={s.text} />)}
                  </> : null}
                  {selected.analysis?.risks?.length ? <>
                    <div className="text-xs font-bold uppercase tracking-widest border-l-2 pl-2 mb-2 mt-3" style={{borderColor:'#E05252',color:'#E05252'}}>Factores de Riesgo ({selected.analysis.risks.length})</div>
                    {selected.analysis.risks.map((r,i)=><Item key={i} num={i+1} title={r.title} text={r.text} />)}
                  </> : null}
                  {selected.analysis?.recommendations?.length ? <>
                    <div className="text-xs font-bold uppercase tracking-widest border-l-2 pl-2 mb-2 mt-3" style={{borderColor:'#C9A84C',color:'#C9A84C'}}>Recomendaciones ({selected.analysis.recommendations.length})</div>
                    {selected.analysis.recommendations.map((r,i)=><Item key={i} num={i+1} title={r.title} text={r.text} />)}
                  </> : null}
                  <div className="flex gap-2 mt-4">
                    <a href={`https://wa.me/50497410936?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                      className="flex-1 text-center rounded-full bg-[#25D366] text-white text-sm font-bold py-2.5">WhatsApp al cliente</a>
                    <a href={`mailto:${selected.email}?subject=Tu evaluación de visa Genius`}
                      className="flex-1 text-center rounded-full border border-white/20 text-white/70 text-sm font-medium py-2.5">Enviar email</a>
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      )}
    </main>
  )
}
