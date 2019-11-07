import {GeneratedApis} from '../types/api-definition';
import {ApiDef} from 'aegis-api-proxy';
export default {
  admin: {
    user: {
      list: {
        url: '/admin/user',
        method: 'GET'
      }
    }
  },
  ai: {
    xiaoe: {
      chat: {
        url: '/ai/xiaoe',
        method: 'DELETE'
      }
    }
  },
  api: {
    agentuser: {
      list: {
        url: '/api/agentuser',
        method: 'GET'
      }
    },
    chatmessage: {
      list: {
        url: '/api/chatmessage',
        method: 'GET'
      }
    },
    contacts: {
      list: {
        url: '/api/contacts',
        method: 'GET'
      },
      put: {
        url: '/api/contacts',
        method: 'PUT',
        isFormData: true
      },
      delete: {
        url: '/api/contacts',
        method: 'DELETE'
      }
    },
    leavemsg: {
      list: {
        list: {
          url: '/api/leavemsg/list',
          method: 'POST',
          isFormData: false
        }
      }
    },
    online: {
      user: {
        list: {
          url: '/api/online/user',
          method: 'GET'
        }
      }
    },
    organ: {
      list: {
        url: '/api/organ',
        method: 'GET'
      },
      put: {
        url: '/api/organ',
        method: 'PUT',
        isFormData: true
      },
      delete: {
        url: '/api/organ',
        method: 'DELETE'
      }
    },
    quality: {
      list: {
        url: '/api/quality',
        method: 'GET'
      }
    },
    quickreply: {
      list: {
        url: '/api/quickreply',
        method: 'GET'
      },
      put: {
        url: '/api/quickreply',
        method: 'PUT',
        isFormData: true
      },
      delete: {
        url: '/api/quickreply',
        method: 'DELETE'
      }
    },
    quicktype: {
      list: {
        url: '/api/quicktype',
        method: 'GET'
      },
      put: {
        url: '/api/quicktype',
        method: 'PUT',
        isFormData: true
      },
      delete: {
        url: '/api/quicktype',
        method: 'DELETE'
      }
    },
    servicequene: {
      list: {
        url: '/api/servicequene',
        method: 'GET'
      },
      agentStatus: {
        url: '/api/servicequene',
        method: 'PUT',
        isFormData: false
      }
    },
    sysdic: {
      list: {
        url: '/api/sysdic',
        method: 'GET'
      }
    },
    tags: {
      list: {
        url: '/api/tags',
        method: 'GET'
      }
    },
    user: {
      list: {
        url: '/api/user',
        method: 'GET'
      },
      put: {
        url: '/api/user',
        method: 'PUT',
        isFormData: true
      },
      delete: {
        url: '/api/user',
        method: 'DELETE'
      }
    },
    webim: {
      list: {
        url: '/api/webim/:id',
        method: 'DELETE',
        requestData(id: string) {
          return this.r({id});
        }
      },
      put: {
        url: '/api/webim',
        method: 'PUT',
        isFormData: true
      },
      agent: {
        agent: {
          url: '/api/webim/agent',
          method: 'DELETE'
        }
      },
      ai: {
        session: {
          url: '/api/webim/ai',
          method: 'DELETE'
        }
      },
      chat: {
        his: {
          history: {
            url: '/api/webim/chat/his',
            method: 'DELETE'
          }
        }
      },
      hot: {
        hot: {
          url: '/api/webim/hot',
          method: 'DELETE'
        }
      },
      image: {
        upload: {
          upload: {
            url: '/api/webim/image/upload',
            method: 'DELETE'
          }
        }
      },
      leavemsg: {
        save: {
          leavemsg: {
            url: '/api/webim/leavemsg/save',
            method: 'POST',
            isFormData: true
          }
        }
      },
      message: {
        unuseful: {
          unuseful: {
            url: '/api/webim/message/unuseful',
            method: 'DELETE'
          }
        },
        useful: {
          useful: {
            url: '/api/webim/message/useful',
            method: 'DELETE'
          }
        }
      },
      query: {
        query: {
          url: '/api/webim/query',
          method: 'DELETE'
        }
      },
      satis: {
        satis: {
          url: '/api/webim/satis',
          method: 'DELETE'
        },
        save: {
          satissave: {
            url: '/api/webim/satis/save',
            method: 'POST',
            isFormData: true
          }
        }
      },
      session: {
        session: {
          url: '/api/webim/session',
          method: 'DELETE'
        }
      },
      suggest: {
        mobile: {
          mobilesuggest: {
            url: '/api/webim/suggest/mobile/:appid',
            method: 'DELETE'
          }
        }
      },
      url: {
        url: {
          url: '/api/webim/url',
          method: 'DELETE'
        }
      }
    },
    workorders: {
      list: {
        url: '/api/workorders',
        method: 'GET'
      },
      put: {
        url: '/api/workorders',
        method: 'PUT',
        isFormData: true
      },
      delete: {
        url: '/api/workorders',
        method: 'DELETE'
      },
      assigned: {
        list: {
          url: '/api/workorders/assigned',
          method: 'GET'
        }
      },
      closed: {
        list: {
          url: '/api/workorders/closed',
          method: 'GET'
        }
      },
      comment: {
        list: {
          url: '/api/workorders/comment',
          method: 'PUT',
          isFormData: true
        }
      },
      contacts: {
        list: {
          url: '/api/workorders/contacts',
          method: 'GET'
        }
      },
      detail: {
        list: {
          url: '/api/workorders/detail',
          method: 'GET'
        }
      },
      favorites: {
        list: {
          url: '/api/workorders/favorites',
          method: 'GET'
        }
      },
      process: {
        list: {
          url: '/api/workorders/process',
          method: 'PUT',
          isFormData: true
        }
      },
      workitem: {
        list: {
          url: '/api/workorders/workitem',
          method: 'GET'
        }
      }
    },
    xiaoe: {
      cate: {
        list: {
          url: '/api/xiaoe/cate',
          method: 'GET'
        },
        put: {
          url: '/api/xiaoe/cate',
          method: 'PUT',
          isFormData: true
        },
        delete: {
          url: '/api/xiaoe/cate',
          method: 'DELETE'
        }
      },
      topic: {
        list: {
          url: '/api/xiaoe/topic',
          method: 'GET'
        },
        put: {
          url: '/api/xiaoe/topic',
          method: 'PUT',
          isFormData: true
        },
        delete: {
          url: '/api/xiaoe/topic',
          method: 'DELETE'
        },
        detail: {
          list: {
            url: '/api/xiaoe/topic/detail',
            method: 'GET'
          }
        }
      }
    }
  },
  apiFakeData: {
    appointmentReviewList: {
      appointmentReviewList: {
        url: '/apiFakeData/appointmentReviewList',
        method: 'GET'
      }
    },
    caseQueryList: {
      caseQueryList: {
        url: '/apiFakeData/caseQueryList',
        method: 'GET'
      }
    },
    caseReserveQueryList: {
      caseReserveQueryList: {
        url: '/apiFakeData/caseReserveQueryList',
        method: 'GET'
      }
    },
    executionInfoList: {
      executionInfo: {
        url: '/apiFakeData/executionInfoList',
        method: 'GET'
      }
    },
    litigationConsultation: {
      litigationConsultation: {
        url: '/apiFakeData/litigationConsultation',
        method: 'GET',
        requestData(sjah: string) {
          return this.r({sjah});
        }
      }
    }
  },
  apps: {
    contacts: {
      byMobile: {
        getByMobile: {
          url: '/apps/contacts/by_mobile/:mobile',
          method: 'GET',
          requestData(mobile: string) {
            return this.r({mobile});
          }
        }
      },
      caller: {
        saveContacts: {
          url: '/apps/contacts/caller',
          method: 'POST',
          isFormData: false
        }
      },
      checkIdentity: {
        checkIdentity: {
          url: '/apps/contacts/checkIdentity',
          method: 'GET',
          requestData(idCardNumber: string) {
            return this.r({idCardNumber});
          }
        }
      },
      findPartyByContactsId: {
        findPartyByContactsId: {
          url: '/apps/contacts/findPartyByContactsId',
          method: 'GET',
          requestData(contactsId: string) {
            return this.r({contactsId});
          }
        }
      },
      findPartyByPartyId: {
        findPartyByPartyId: {
          url: '/apps/contacts/findPartyByPartyId',
          method: 'GET',
          requestData(partyId: string) {
            return this.r({partyId});
          }
        }
      },
      findPartyExistOrNotExist: {
        findPartyExistOrNotExist: {
          url: '/apps/contacts/findPartyExistOrNotExist',
          method: 'POST',
          isFormData: true
        }
      },
      getUUID: {
        getUUID: {
          url: '/apps/contacts/getUUID',
          method: 'GET'
        }
      },
      party: {
        saveParty: {
          url: '/apps/contacts/party',
          method: 'POST',
          isFormData: true
        }
      },
      uuid: {
        uuid: {
          url: '/apps/contacts/uuid',
          method: 'GET'
        }
      },
      get: {
        url: '/apps/contacts/:id',
        method: 'GET',
        requestData(id: string) {
          return this.r({id});
        }
      }
    },
    qc: {
      _12368: {
        index: {
          getIndexPage: {
            url: '/apps/qc/12368/index',
            method: 'GET'
          }
        },
        list: {
          getList: {
            url: '/apps/qc/12368/list',
            method: 'POST',
            isFormData: true
          }
        },
        myQualifiedList: {
          getMyQualityList: {
            url: '/apps/qc/12368/my_qualified_list',
            method: 'GET'
          }
        },
        myQualityListMonitor: {
          getFinishedQualityListMonitor: {
            url: '/apps/qc/12368/my_quality_list_monitor',
            method: 'GET'
          }
        },
        myQualityListNormal: {
          getFinishedQualityList: {
            url: '/apps/qc/12368/my_quality_list_normal',
            method: 'GET'
          }
        },
        objectionHandle: {
          getCasePage: {
            url: '/apps/qc/12368/objection_handle',
            method: 'GET'
          },
          list: {
            getObjectionList: {
              url: '/apps/qc/12368/objection_handle/list',
              method: 'POST',
              isFormData: true
            }
          },
          objectionDetail: {
            getObjectionDetailPage: {
              url: '/apps/qc/12368/objection_handle/objection_detail',
              method: 'GET'
            }
          },
          add: {
            addObjection: {
              url: '/apps/qc/12368/objection_handle/:workOrderId/add',
              method: 'POST',
              isFormData: false,
              requestData(workOrderId: string) {
                return this.r({workOrderId});
              }
            }
          },
          handle: {
            handlerObjection: {
              url: '/apps/qc/12368/objection_handle/:workOrderId/handle',
              method: 'POST',
              isFormData: true
            }
          }
        },
        qualityDetail: {
          getQualityDetailPage: {
            url: '/apps/qc/12368/quality_detail',
            method: 'GET'
          }
        },
        startQuality: {
          getStartQualityPage: {
            url: '/apps/qc/12368/start_quality',
            method: 'GET'
          }
        },
        startQualityList: {
          getStartQualityList: {
            url: '/apps/qc/12368/start_quality_list',
            method: 'GET'
          }
        },
        task: {
          getTask: {
            url: '/apps/qc/12368/task',
            method: 'GET'
          },
          addTask: {
            url: '/apps/qc/12368/task',
            method: 'POST',
            isFormData: false
          },
          team: {
            getTeamTask: {
              url: '/apps/qc/12368/task/team',
              method: 'GET'
            }
          },
          total: {
            getTaskTotal: {
              url: '/apps/qc/12368/task/total',
              method: 'GET'
            }
          },
          delTask: {
            url: '/apps/qc/12368/task/:id',
            method: 'DELETE',
            requestData(id: string) {
              return this.r({id});
            }
          }
        },
        qcWorkOrder: {
          url: '/apps/qc/12368/:workOrderId',
          method: 'POST',
          isFormData: true
        },
        delWorkOrder: {
          url: '/apps/qc/12368/:workOrderId',
          method: 'DELETE',
          requestData(workOrderId: string) {
            return this.r({workOrderId});
          }
        }
      },
      group: {
        _12368: {
          add: {
            add: {
              url: '/apps/qc/group/12368/add',
              method: 'POST',
              isFormData: true
            }
          },
          all: {
            getAll: {
              url: '/apps/qc/group/12368/all',
              method: 'GET'
            }
          },
          delete: {
            delete: {
              url: '/apps/qc/group/12368/delete/:id',
              method: 'DELETE',
              requestData(id: string) {
                return this.r({id});
              }
            }
          },
          get: {
            getOne: {
              url: '/apps/qc/group/12368/get',
              method: 'GET',
              requestData(id: string) {
                return this.r({id});
              }
            }
          },
          list: {
            getAll: {
              url: '/apps/qc/group/12368/list',
              method: 'GET'
            }
          },
          mine: {
            getMyGroups: {
              url: '/apps/qc/group/12368/mine',
              method: 'GET'
            }
          },
          update: {
            update: {
              url: '/apps/qc/group/12368/update',
              method: 'POST',
              isFormData: true
            }
          },
          userlist: {
            getUserList: {
              url: '/apps/qc/group/12368/userlist',
              method: 'GET'
            }
          }
        }
      },
      score: {
        _12368: {
          get: {
            getOne: {
              url: '/apps/qc/score/12368/get',
              method: 'GET',
              requestData(id: string) {
                return this.r({id});
              }
            }
          },
          list: {
            getAll: {
              url: '/apps/qc/score/12368/list',
              method: 'GET'
            }
          },
          save: {
            add: {
              url: '/apps/qc/score/12368/save',
              method: 'POST',
              isFormData: true,
              requestData(schemaStr: string) {
                return this.r({schemaStr});
              }
            }
          }
        }
      }
    },
    workorders: {
      _12368: {
        add: {
          url: '/apps/workorders/12368',
          method: 'POST',
          isFormData: true
        },
        apps: {
          business: {
            WorkOrdersList: {
              getReportList: {
                url: '/apps/workorders/12368/apps/business/WorkOrdersList',
                method: 'GET'
              }
            }
          }
        },
        consult: {
          list: {
            getConsultList: {
              url: '/apps/workorders/12368/consult/list',
              method: 'GET'
            }
          },
          save: {
            saveConsultData: {
              url: '/apps/workorders/12368/consult/save',
              method: 'POST',
              isFormData: false
            }
          },
          getConsultListByConsistenceId: {
            url: '/apps/workorders/12368/consult/:consistenceId',
            method: 'GET',
            requestData(consistenceId: string) {
              return this.r({consistenceId});
            }
          }
        },
        consultdata: {
          deleteConsultData: {
            url: '/apps/workorders/12368/consultdata/:consistenceId',
            method: 'DELETE'
          }
        },
        detail: {
          getDetailPage: {
            url: '/apps/workorders/12368/detail',
            method: 'GET'
          }
        },
        edit: {
          url: '/apps/workorders/12368/:id',
          method: 'PUT',
          isFormData: false,
          requestData(id: string) {
            return this.r({id});
          }
        },
        extra: {
          batch: {
            batchSaveExtraData: {
              url: '/apps/workorders/12368/extra/batch',
              method: 'POST',
              isFormData: false
            }
          },
          save: {
            saveExtraData: {
              url: '/apps/workorders/12368/extra/save',
              method: 'POST',
              isFormData: true
            }
          },
          deleteExtraData: {
            url: '/apps/workorders/12368/:id/extra',
            method: 'DELETE'
          }
        },
        fav: {
          favorite: {
            url: '/apps/workorders/12368/fav/:workOrderId',
            method: 'POST',
            isFormData: true,
            requestData(workOrderId: string) {
              return this.r({workOrderId});
            }
          }
        },
        history: {
          getHistoryPage: {
            url: '/apps/workorders/12368/history',
            method: 'GET'
          }
        },
        list: {
          getList: {
            url: '/apps/workorders/12368/list',
            method: 'GET'
          }
        },
        myorders: {
          getMyOrdersPage: {
            url: '/apps/workorders/12368/myorders',
            method: 'GET'
          }
        },
        parties: {
          getParties: {
            url: '/apps/workorders/12368/parties/:id',
            method: 'GET',
            requestData(id: string) {
              return this.r({id});
            }
          }
        },
        phone: {
          mark: {
            modifyState: {
              url: '/apps/workorders/12368/phone/mark/:workOrderId',
              method: 'PUT',
              isFormData: true
            }
          }
        },
        phonemark: {
          getPhoneMark: {
            url: '/apps/workorders/12368/phonemark/:id',
            method: 'GET',
            requestData(id: string) {
              return this.r({id});
            }
          }
        },
        report: {
          getReportPage: {
            url: '/apps/workorders/12368/report',
            method: 'GET'
          },
          addReport: {
            url: '/apps/workorders/12368/report',
            method: 'POST',
            isFormData: true
          },
          add: {
            getReportAddPage: {
              url: '/apps/workorders/12368/report/add',
              method: 'GET'
            }
          },
          confirm: {
            confirmSuccess: {
              url: '/apps/workorders/12368/report/confirm',
              method: 'POST',
              isFormData: true,
              requestData(reportId: string) {
                return this.r({reportId});
              }
            }
          },
          detail: {
            getReportDetailPage: {
              url: '/apps/workorders/12368/report/detail',
              method: 'GET'
            }
          },
          getMsg: {
            getWorkOrdersMsg: {
              url: '/apps/workorders/12368/report/getMsg',
              method: 'GET',
              requestData(reportId: string) {
                return this.r({reportId});
              }
            }
          },
          history: {
            getChangeHistory: {
              url: '/apps/workorders/12368/report/history/:id',
              method: 'GET',
              requestData(id: string) {
                return this.r({id});
              }
            }
          },
          judgement: {
            judgeRemind: {
              url: '/apps/workorders/12368/report/judgement',
              method: 'GET',
              requestData(id: string) {
                return this.r({id});
              }
            }
          },
          list: {
            getReportList: {
              url: '/apps/workorders/12368/report/list',
              method: 'GET'
            }
          },
          manual: {
            manualSend: {
              url: '/apps/workorders/12368/report/manual',
              method: 'GET'
            }
          },
          myReportWorkOrders: {
            workOrdersList: {
              url: '/apps/workorders/12368/report/myReportWorkOrders',
              method: 'GET'
            }
          },
          revert: {
            revertReport: {
              url: '/apps/workorders/12368/report/revert/:id',
              method: 'PUT',
              isFormData: true,
              requestData(id: string) {
                return this.r({id});
              }
            }
          },
          send: {
            sendMsg: {
              url: '/apps/workorders/12368/report/send',
              method: 'POST',
              isFormData: true
            }
          },
          getReport: {
            url: '/apps/workorders/12368/report/:id',
            method: 'GET',
            requestData(id: string) {
              return this.r({id});
            }
          },
          editReport: {
            url: '/apps/workorders/12368/report/:id',
            method: 'POST',
            isFormData: true
          },
          delReport: {
            url: '/apps/workorders/12368/report/:id',
            method: 'DELETE',
            requestData(id: string) {
              return this.r({id});
            }
          }
        },
        todayWorkOrders: {
          getTotalWorkOrders: {
            url: '/apps/workorders/12368/todayWorkOrders',
            method: 'GET'
          }
        },
        user: {
          getUserList: {
            url: '/apps/workorders/12368/user',
            method: 'GET',
            requestData(keyword: string) {
              return this.r({keyword});
            }
          },
          coOrganizer: {
            getOrganizer: {
              url: '/apps/workorders/12368/user/co_organizer',
              method: 'GET'
            }
          },
          dept: {
            getDeptList: {
              url: '/apps/workorders/12368/user/dept',
              method: 'GET'
            },
            getDept: {
              url: '/apps/workorders/12368/user/dept/:id',
              method: 'GET',
              requestData(id: string) {
                return this.r({id});
              }
            }
          },
          deptCascade: {
            getDeptCascade: {
              url: '/apps/workorders/12368/user/dept_cascade',
              method: 'GET',
              requestData(parentId: string) {
                return this.r({parentId});
              }
            }
          },
          judge: {
            getJudge: {
              url: '/apps/workorders/12368/user/judge',
              method: 'GET',
              requestData(deptId: string) {
                return this.r({deptId});
              }
            }
          },
          next: {
            getNextUser: {
              url: '/apps/workorders/12368/user/next',
              method: 'GET'
            }
          },
          getUser: {
            url: '/apps/workorders/12368/user/:id',
            method: 'GET',
            requestData(id: string) {
              return this.r({id});
            }
          }
        },
        get: {
          url: '/apps/workorders/12368/:id',
          method: 'GET'
        },
        delete: {
          url: '/apps/workorders/12368/:id',
          method: 'DELETE',
          requestData(id: string) {
            return this.r({id});
          }
        }
      }
    }
  },
  currentUser: {
    index: {
      url: '/current_user',
      method: 'GET'
    }
  },
  queryCenter: {
    caseDetail: {
      caseDetail: {
        url: '/queryCenter/caseDetail',
        method: 'GET'
      }
    },
    caseList: {
      caseList: {
        url: '/queryCenter/caseList',
        method: 'GET',
        requestData(type: string) {
          return this.r({type});
        }
      }
    },
    caseQueryDetail: {
      caseQueryDetail: {
        url: '/queryCenter/caseQueryDetail',
        method: 'POST',
        isFormData: false
      }
    },
    caseQueryDetailNational: {
      caseQueryDetailNational: {
        url: '/queryCenter/caseQueryDetailNational',
        method: 'POST',
        isFormData: false
      }
    },
    caseReserveByCbh: {
      caseReserveByCbh: {
        url: '/queryCenter/caseReserveByCbh',
        method: 'GET'
      }
    },
    caseReserveDetail: {
      caseReserveDetail: {
        url: '/queryCenter/caseReserveDetail',
        method: 'POST',
        isFormData: false
      }
    },
    clearCache: {
      clearCache: {
        url: '/queryCenter/clearCache',
        method: 'GET'
      }
    },
    executionInfo: {
      executionInfo: {
        url: '/queryCenter/executionInfo',
        method: 'GET'
      }
    },
    letterAndVisitDetail: {
      letterAndVisitDetail: {
        url: '/queryCenter/letterAndVisitDetail',
        method: 'POST',
        isFormData: false
      }
    },
    letterAndVisitList: {
      letterAndVisitList: {
        url: '/queryCenter/letterAndVisitList',
        method: 'POST',
        isFormData: false
      }
    },
    limiter: {
      log: {
        getLimiterLogs: {
          url: '/queryCenter/limiter/log',
          method: 'GET'
        }
      },
      settings: {
        limiterSetting: {
          url: '/queryCenter/limiter/settings',
          method: 'GET'
        }
      },
      editMaxRequestCount: {
        url: '/queryCenter/limiter/:key',
        method: 'PUT',
        isFormData: true
      }
    },
    queryCenterFile: {
      reservationLoanFile: {
        url: '/queryCenter/queryCenterFile',
        method: 'GET',
        requestData(filePath: string) {
          return this.r({filePath});
        }
      }
    },
    reservationLoan: {
      reservationLoan: {
        url: '/queryCenter/reservationLoan',
        method: 'POST',
        isFormData: false
      }
    }
  },
  rest: {
    call: {
      monitor: {
        monitor: {
          url: '/rest/call/monitor',
          method: 'GET'
        }
      }
    },
    webim: {
      agent: {
        agent: {
          url: '/rest/webim/agent',
          method: 'DELETE'
        }
      },
      host: {
        host: {
          url: '/rest/webim/host',
          method: 'DELETE'
        }
      },
      message: {
        unuseful: {
          unuseful: {
            url: '/rest/webim/message/unuseful',
            method: 'DELETE'
          }
        },
        useful: {
          useful: {
            url: '/rest/webim/message/useful',
            method: 'DELETE'
          }
        }
      }
    }
  },
  session: {
    session: {
      url: '/session',
      method: 'POST',
      isFormData: false
    }
  },
  tokens: {
    user: {
      url: '/tokens',
      method: 'GET'
    },
    login: {
      url: '/tokens',
      method: 'POST',
      isFormData: true
    },
    logout: {
      url: '/tokens',
      method: 'DELETE',
      requestData(authorization: string) {
        return this.r({authorization});
      }
    },
    error: {
      error: {
        url: '/tokens/error',
        method: 'GET'
      }
    }
  },
  v5: {
    api: {
      apps: {
        callcenter: {
          extention: {
            detail: {
              detail: {
                url: '/v5/api/apps/callcenter/extention/detail',
                method: 'GET'
              }
            }
          }
        },
        organization: {
          save: {
            url: '/v5/api/apps/organization',
            method: 'POST',
            isFormData: false
          },
          update: {
            url: '/v5/api/apps/organization',
            method: 'PUT',
            isFormData: false
          },
          list: {
            list: {
              url: '/v5/api/apps/organization/list',
              method: 'GET'
            }
          },
          get: {
            url: '/v5/api/apps/organization/:id',
            method: 'GET',
            requestData(id: string) {
              return this.r({id});
            }
          },
          delete: {
            url: '/v5/api/apps/organization/:id',
            method: 'DELETE',
            requestData(id: string) {
              return this.r({id});
            }
          }
        },
        workorders: {
          delete: {
            url: '/v5/api/apps/workorders',
            method: 'DELETE'
          },
          add: {
            add: {
              url: '/v5/api/apps/workorders/add',
              method: 'GET'
            }
          },
          closed: {
            closedorders: {
              url: '/v5/api/apps/workorders/closed',
              method: 'GET'
            },
            save: {
              closedSave: {
                url: '/v5/api/apps/workorders/closed/save',
                method: 'DELETE'
              }
            }
          },
          comments: {
            comments: {
              url: '/v5/api/apps/workorders/comments',
              method: 'GET'
            }
          },
          countData: {
            countData: {
              url: '/v5/api/apps/workorders/count_data',
              method: 'GET'
            }
          },
          dept: {
            user: {
              add: {
                url: '/v5/api/apps/workorders/dept/user',
                method: 'GET'
              }
            }
          },
          detail: {
            comments: {
              detailComments: {
                url: '/v5/api/apps/workorders/detail/comments',
                method: 'DELETE'
              }
            },
            dataevent: {
              dataEvent: {
                url: '/v5/api/apps/workorders/detail/dataevent',
                method: 'DELETE'
              }
            },
            detail: {
              url: '/v5/api/apps/workorders/detail/:id',
              method: 'GET',
              requestData(id: string) {
                return this.r({id});
              }
            }
          },
          edit: {
            edit: {
              url: '/v5/api/apps/workorders/edit',
              method: 'DELETE'
            }
          },
          embed: {
            add: {
              embedadd: {
                url: '/v5/api/apps/workorders/embed/add',
                method: 'DELETE'
              }
            },
            save: {
              embedsave: {
                url: '/v5/api/apps/workorders/embed/save',
                method: 'DELETE'
              }
            }
          },
          extra: {
            field: {
              byType: {
                byType: {
                  url: '/v5/api/apps/workorders/extra/field/by_type',
                  method: 'GET',
                  requestData(type: string) {
                    return this.r({type});
                  }
                }
              }
            }
          },
          fav: {
            order: {
              favorder: {
                url: '/v5/api/apps/workorders/fav/order',
                method: 'DELETE'
              }
            }
          },
          favorites: {
            favorites: {
              url: '/v5/api/apps/workorders/favorites',
              method: 'DELETE'
            },
            save: {
              favoritesSave: {
                url: '/v5/api/apps/workorders/favorites/save',
                method: 'DELETE'
              }
            }
          },
          files: {
            delete: {
              filesdelete: {
                url: '/v5/api/apps/workorders/files/delete',
                method: 'DELETE'
              }
            }
          },
          index: {
            index: {
              url: '/v5/api/apps/workorders/index',
              method: 'DELETE'
            }
          },
          myorders: {
            myOrders: {
              url: '/v5/api/apps/workorders/myorders',
              method: 'GET'
            },
            save: {
              myorderssave: {
                url: '/v5/api/apps/workorders/myorders/save',
                method: 'DELETE'
              }
            }
          },
          notassigned: {
            notassigned: {
              url: '/v5/api/apps/workorders/notassigned',
              method: 'DELETE'
            },
            process: {
              notassignedprocess: {
                url: '/v5/api/apps/workorders/notassigned/process',
                method: 'DELETE'
              }
            }
          },
          pages: {
            pages: {
              url: '/v5/api/apps/workorders/pages',
              method: 'DELETE'
            }
          },
          save: {
            save: {
              url: '/v5/api/apps/workorders/save',
              method: 'DELETE'
            }
          },
          update: {
            all: {
              updateall: {
                url: '/v5/api/apps/workorders/update/all',
                method: 'DELETE'
              }
            }
          },
          upload: {
            upload: {
              url: '/v5/api/apps/workorders/upload',
              method: 'DELETE'
            }
          },
          workflow: {
            workitem: {
              url: '/v5/api/apps/workorders/workflow',
              method: 'DELETE'
            },
            approval: {
              workflowapproval: {
                url: '/v5/api/apps/workorders/workflow/approval',
                method: 'DELETE'
              }
            },
            detail: {
              workflowdetail: {
                url: '/v5/api/apps/workorders/workflow/detail',
                method: 'DELETE'
              }
            },
            process: {
              workflowprocess: {
                url: '/v5/api/apps/workorders/workflow/process',
                method: 'DELETE'
              }
            },
            save: {
              workflowsave: {
                url: '/v5/api/apps/workorders/workflow/save',
                method: 'DELETE'
              }
            }
          },
          workitem: {
            workitem: {
              url: '/v5/api/apps/workorders/workitem',
              method: 'DELETE'
            },
            process: {
              workitemprocess: {
                url: '/v5/api/apps/workorders/workitem/process',
                method: 'DELETE'
              }
            }
          }
        }
      },
      sysdic: {
        byType: {
          byType: {
            url: '/v5/api/sysdic/by_type',
            method: 'GET',
            requestData(code: string) {
              return this.r({code});
            }
          }
        },
        byTypes: {
          byTypes: {
            url: '/v5/api/sysdic/by_types',
            method: 'GET'
          }
        }
      }
    }
  }
} as GeneratedApis<ApiDef>;
