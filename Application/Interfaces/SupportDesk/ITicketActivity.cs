﻿using Application.DTOs.SupportDesk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces.SupportDesk
{
    public interface ITicketActivity
    {
        public Task<TicketActivityList> TicketDescription(TicketActivityDTO ticketActivityDTO);
    }
}
